// index.js - JavaScript Events and Forms
// Requirements: jQuery must be loaded for this script to work.
// Author: Ari Ferreros
// Date: 05/19/2025
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('')
}

$('#submit').click(function () {
  const userName = $('#user-name').val()
  userNameSorted = sortString(userName)
  const initialChar = userNameSorted[0]?.toLowerCase()
  const outputText = `<div class="text"><p>${userNameSorted}</p></div>`
  let fighterDiv = `<div class="no-fighter"><p>Sorry, we ran out of fighters for this name :|</p></div>`

  if (initialChar < 'k' || initialChar == 'r' || initialChar == 'm') {
    const fighterImagePath = `img/${initialChar}.gif`
    fighterDiv = `
    <div class="fighter">
      <img src="${fighterImagePath}"">
    </div>`
  }

  $('#output').html(outputText).append(fighterDiv)
})

function main() {
  // the code that makes everything happen
}

// let's get this party started
main()
