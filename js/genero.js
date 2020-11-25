window.addEventListener('load',function(){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var generoPeliculas = datos.results
      console.log(generoPeliculas);
  
      for (var i = 0; i < 10; i++) {
        document.querySelector(".generoPeliculas").innerHTML += `<a href='DetallePelicula.html?id=${generoPeliculas[i].genre_ids}'   class='mobile ' ><img src='https://image.tmdb.org/t/p/w500${generoPeliculas[i].poster_path}'   alt='${generoPeliculas[i].title}' /></a>`
      }
    })
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var generoSeries = datos.results
      console.log(generoSeries);
  
      for (var i = 0; i < 10; i++) {
        document.querySelector(".generoSeries").innerHTML += `<a href='DetallePelicula.html?id=${generoSeries[i].genre_ids}'   class='mobile ' ><img src='https://image.tmdb.org/t/p/w500${generoSeries[i].poster_path}'   alt='${generoSeries[i].title}' /></a>`
      }
    })
  
    })