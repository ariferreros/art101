// Ari Ferreros
// Lab 16 APIs
// June 5 2025

function comic() {
  $.ajax({
    url: 'https://corsproxy.io/?https://xkcd.com/614/info.0.json',
    dataType: 'json',
    type: 'GET',
    success: function (comicObj) {
      console.log(comicObj)
      console.log(comicObj.title)
      const title = comicObj.title
      const img = comicObj.img
      const alt = comicObj.alt
      // const transcript = comicObj.transcript
      $('#output').append(
        `<h1>${title}</h1>` +
          `<img id = "comic" src="${img}" alt="${alt}" />` +
          // `<p>${transcript}</p>` +
          `<p>${alt}</p>`
      )
    },
    error: function (error) {
      console.log('Error: ' + error)
    },
  })
}
comic()
