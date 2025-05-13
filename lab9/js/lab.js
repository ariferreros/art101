// index.js - jQuery
// Requirements: jQuery must be loaded for this script to work.
// Author: Ari Ferreros 
// Date: 05/12/2025
$("#results").append("<button id='button-results'>Make Special</button>");

$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#button-challenge").click(function () {
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
})

$("#button-problems").click(function () {
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
})
$("#button-results").click(function () {
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
})
function main() {

  // the code that makes everything happen
}

// let's get this party started
main();
