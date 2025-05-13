// index.js - anon functions and callbacks
// Author: Ari Ferreros 
// Date: 05/08/2025

// Constants
let myArr = [0, 1, 2, 3]

// Functions

function add3(x) {
  return x + 3;
}


let result = myArr.map(add3);

let result2 = myArr.map(function (x) {
  return x * x;
})


function main() {
  console.log('0 + 3 = ' + add3(0));
  console.log('6 + 3 = ' + add3(6));
  console.log('My array is ' + myArr);
  console.log('Add 3 to all numbers in myArr ' + result);
  console.log('Square all numbers in myArr ' + result2);


  // the code that makes everything happen
}

// let's get this party started
main();
