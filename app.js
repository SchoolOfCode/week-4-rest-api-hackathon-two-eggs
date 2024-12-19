import express from "express";

import { returnAllData, findPopulationByDate } from "./helperFunctions.js";

const app = express();

const PORT = 3000;

app.use(express.json());

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

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});

// response.json({
//   success: true,
//   payload: result, // Wrap the data in a `payload` object
// });
