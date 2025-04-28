// index.js - Exploring JavaScript Functions
// Author: Ari Ferreros
// Date:04/28/2025

// Constants

// Functions
function sortUserName() {
  let userName = window.prompt("Please state your name")
  console.log("userName=", userName)

  let nameArray = userName.split('');
  console.log("nameArray = ", nameArray)

  let sortedNameArray = nameArray.sort();
  console.log("sortedNameArray= ", sortedNameArray)

  nameSorted = sortedNameArray.join('')
  console.log("nameSorted= ", nameSorted)

  return nameSorted
}

// output 
document.writeln("Here is your sorted name: " + sortUserName() + "</br>")


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
