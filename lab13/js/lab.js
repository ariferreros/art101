// index.js - JavaScript Loops
// Requirements: jQuery must be loaded for this script to work.
// Author: Ari Ferreros
// Date: 05/26/2025
let factorsMap = {
  3: 'Fizz',
  5: 'Buzz',
  7: 'Boom',
}
function startLoop(maxNum) {
  let str = ''
  for (let i = 0; i <= maxNum; i++) {
    str += `${i}: `

    for (const factor in factorsMap) {
      if (i % factor === 0) {
        str += factorsMap[factor]
      }
    }
    str += '<br>'
  }
  return str
}
// startLoop(100)

function addFactor(num, name) {
  factorsMap[num] = name
}

$('#button').click(function () {
  const factorName = $('#factor-name').val()
  const factor = $('#factor').val()
  addFactor(factor, factorName)
  const maxNum = $('#max-num').val()
  const loopResult = startLoop(maxNum)
  const outputText = `<div class="text"><p>${loopResult}</p></div>`
  $('#output').html(outputText).append("<div class='box'></div>")
})

function main() {
  // the code that makes everything happen
}

// let's get this party started
main()
