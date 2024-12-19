// import the data from "./populationData.js"
import { data } from "./populationData.js";
//Import ID generator module ()
import { v4 as uuidv4 } from 'uuid';

// creates an array of all the objects
let dataArray = data.map((data) => ({ ...data }));

//accesses specific year's Date
let dateValue;

// Need a function that reads from an object.
// To read from the object we need the 'date' key, the 'date' value will be the parameter to call the function


export async function returnAllData(){
    return [...dataArray]
};

export async function findPopulationByDate(dataArray, targetYear){
// Use a for loop to iterate through the array containing the object
    for (let i = 0; i < dataArray.length; i++) {
        // If an iteration finds a matching 'date' take said object and return the value of 'population' key
        // console.log(dataArray[i].value);
        if (parseInt(dataArray[i].date) === targetYear) {
          dateValue = dataArray[i].value; // Access the date of the object that matches the target year
          return dateValue; // Stop the loop once the year is found
        }
      }
};

// Add an endpoint to your REST API which returns all astronauts in the response body.
