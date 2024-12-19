import express from "express";

import {
  returnAllData,
  findPopulationByDate,
  createInfo,
} from "../models/helperFunctions.js";

const app = express();

const PORT = 3000;

app.use(express.json());

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
      payload: `The population in ${date} was ${popByDate}`,
    });
  } catch (error) {
    res.status(404).json({ error: "Could not retrieve data" });
  }
});

//post
app.post("/", async function (req, res) {
  try {
    const newInfo = req.body;
    const addedInfo = await createInfo(newInfo);
    console.log("addedInfo", addedInfo);

    res.status(201).json({
      success: true,
      payload: addedInfo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Activates PORT on 3000.
app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
