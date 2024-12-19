// Import the data from "./populationData.js"
import { data } from "./populationData.js";
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

// export async function findPopulationByDate(targetYear) {
//   let dateValue;
//   // Use a for loop to iterate through the array containing the object
//   for (let i = 0; i < dataArray.length; i++) {
//     // If an iteration finds a matching 'date' take said object and return the value of 'population' key
//     // console.log(dataArray[i].value);
//     if (parseInt(dataArray[i].date) === targetYear) {
//       dateValue = dataArray[i].value; // Access the date of the object that matches the target year
//       return dateValue; // Stop the loop once the year is found
//     }
//   }
// }

// Add an endpoint to your REST API which returns all astronauts in the response body.
