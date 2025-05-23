// index.js - JavaScript Conditionals
// Requirements: jQuery must be loaded for this script to work.
// Author: Ari Ferreros
// Date: 05/22/2025
function sortingHat(str) {
  const length = str.length
  const mod = length % 4
  if (mod == 0) {
    return 'Thunderclan'
  } else if (mod == 1) {
    return 'Riverclan'
  } else if (mod == 2) {
    return 'Windclan'
  } else {
    return 'Shadowclan'
  }
}

$('#button').click(function () {
  const userName = $('#user-name').val()
  sortedClan = sortingHat(userName)
  const outputText = `<div class="text"><p>You've been sorted into: ${sortedClan}</p></div>`
  $('#output').html(outputText).append("<div class='clan-name'></div>")
})
function main() {
  // the code that makes everything happen
}

// let's get this party started
main()
