// index.js - JavaScript for the Web
// Requirements: jQuery must be loaded for this script to work.
// Author: Ari Ferreros 
// Date: 05/15/2025

let isSans = true;
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  console.log('generateing')
  // Generate the random Lorem Ipsum-like text
  console.log(text.slice(randStart, randStart + randLen));
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function () {
  console.log("button clicked");
  if (isSans) {
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    isSans = false;
  } else {
    const monicaText = generateRandomText();
    $("#output").append('<div class="text-monica">"' + monicaText + '"</div>');
    isSans = true;
  }
});
function main() {

  // the code that makes everything happen
}

// let's get this party started
main();
