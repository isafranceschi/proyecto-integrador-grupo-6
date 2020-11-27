window.addEventListener('load', function(){
    var querystring = location.search
    var url = new URLSearchParams(querystring)
    var id = url.get('id')
    var name = url.get ('name')
    console.log(id);
    console.log(name)
  fetch (`https://api.themoviedb.org/3/discover/tv?api_key=239cb21a3c20983f2c69678890e9289a&with_genres=${id}`)
  .then(function(respuesta) {
    return respuesta.json()
  })
      .then(function(datos) {
    var SeriesXGenero = datos.results
    console.log(SeriesXGenero);
  
       for (var i = 0; i < SeriesXGenero.length; i++) {
      document.querySelector(".SeriesXGenero").innerHTML += `<a href='detalleSerie.html?id=${SeriesXGenero[i].id}' class='mobile ' ><img src='https://image.tmdb.org/t/p/original/`+SeriesXGenero[i].poster_path + `' alt='${SeriesXGenero[i].title}'></a>`
    }
  })
})