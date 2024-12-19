// import the data from "./populationData.js"
import { data } from "./populationData.js";

// creates an array of all the objects
let dataArray = data.map((data) => ({ ...data }));

//accesses specific year's Date
let dateValue = dataArray[1].date;

//## Task 1 - Get all astronauts
//- Add an endpoint to your REST API which returns all astronauts in the response body.
//- test to see if it works

// the first function should be to read the data 'populationData.j return the data
//function getPopulationInGivenYear(year, savedData) {
// use the year parameter to find the match
//   // extratc the population value
//   // return it
//}

//getPopulationInGivenYear(2023, savedData);
