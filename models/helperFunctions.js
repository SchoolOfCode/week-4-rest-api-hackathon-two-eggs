// Import the data from "./populationData.js"
import { data } from "../populationData.js";
// Import ID generator module ()
import { v4 as uuidv4 } from "uuid";

// Creates an array of all the objects
let dataArray = data.map((data) => ({ ...data }));

// Function to return all data
export async function returnAllData() {
  return [...dataArray];
}

// Function to return population in a given year
export async function findPopulationByDate(targetYear) {
  const popObj = dataArray.find(({ date }) => date === targetYear);
  const value = popObj.value;
  return value;
}

//MVP 3: POST request.
const newInfo = [
  {
    date: "2019",
    value: 1407745000,
  },
  {
    date: "2017",
    value: 1396215000,
  },
  {
    date: "2016",
    value: 1387790000,
  },
];

export async function createInfo(newInfo) {
  const newObject = {
    ...newInfo,
  };

  // Make a copy of the dataArray, add the new object to it
  let updatedData = [...dataArray, newObject];

  // Return the updated data to be saved in the POST handler
  return updatedData;
}
