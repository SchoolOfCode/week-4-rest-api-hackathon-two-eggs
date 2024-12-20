import express from "express";
import fs from "fs";
// Import path module
import path from "path";

import {
  returnAllData,
  findPopulationByDate,
  createInfo,
} from "../models/helperFunctions.js";

// MIDDLEWARE
const app = express();
app.use(express.json());

const PORT = 3000;

// Use import.meta.url to get the current file URL and convert it to a path //Absolute path
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const filePath = path.resolve(__dirname, "../populationData.js"); // Absolute path to the file

// MVP 1
app.get("/", async function (req, res) {
  try {
    const data = await returnAllData();
    res.json({
      success: true,
      payload: data,
    });
  } catch (error) {
    res.status(404).json({ error: "Could not retrieve data" });
  }
});

// MVP 2
app.get("/:date", async function (req, res) {
  try {
    const { date } = req.params;
    const popByDate = await findPopulationByDate(date);
    res.json({
      success: true,
      payload: `The Chinese population in ${date} was ${popByDate}`,
    });
  } catch (error) {
    res.status(404).json({ error: "Could not retrieve data" });
  }
});

// MVP 3
app.post("/", async function (req, res) {
  try {
    const newInfo = req.body;
    const addedInfo = await createInfo(newInfo); // Get the updated data from createInfo

    // Write the updated data back to the populationData.js file
    fs.writeFile(
      filePath,
      `export const data = ${JSON.stringify(addedInfo, null, 2)};`,
      (err) => {
        if (err) {
          return res
            .status(500)
            .json({ success: false, message: "Error writing to file" });
        }

        res.status(201).json({
          success: true,
          payload: addedInfo,
        });
      }
    );
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Activates PORT on 3000
app.listen(3000, function () {
  console.log("Server is now listening on http://localhost:3000");
});
