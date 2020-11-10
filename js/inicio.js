fetch("https://api.themoviedb.org/3/movie/popular?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(datos) {
    var peliculas = datos.results
    console.log(peliculas);

    for (var i = 0; i < peliculas.length; i++) {
      document.querySelector(".posters").innerHTML += '<a class="mobile" ><img src="https://image.tmdb.org/t/p/original/' + peliculas[i].poster_path + '" alt=""></a>'
    }
  })