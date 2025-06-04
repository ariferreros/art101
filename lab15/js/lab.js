$('#activate').click(function () {
  if ($('#name').val() === '') {
    return
  }
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${$('#name').val()}/`,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log(data)
      handleSuccess(data)
    },
    error: function (error) {
      console.log('Error: ' + error)
    },
  })
})
let pokemon = {}

handleSuccess = function (data) {
  $('#output').append(`<p>${data.name} chose you!</p>`)
  $('#output').append(`<img src="${data.sprites.front_default}">`)
  pokemon = data
  $('#output').append(`<button id="attack">Use Attack</button>`)
}
$('#output').on('click', '#attack', function () {
  console.log(pokemon)

  console.log('here')
  const randomMove = Math.floor(Math.random() * pokemon.moves.length)
  $('#atk').append(
    `<div id="move">${pokemon.name} used ${pokemon.moves[randomMove].move.name}!</div>`
  )
})
