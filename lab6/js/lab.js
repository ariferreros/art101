// index.js - Exploring objects and arrays
// Author: Ari Ferreros
// Date:04/28/2025

// means of transport array
myTransport = ["Bike", "Bus", "Walking"]

// my main ride object
myMainRide = {
  make: "Archie",
  model: "Fang",
  color: "Dusty White",
  year: 1997,

  // function to calculate the age
  age: function () {
    return 2025 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// Functions


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
