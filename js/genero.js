window.addEventListener('load',function(){
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var masvaloradas2 = datos.results
      var genre_ids = datos.results
      var accion = genre_ids.filtr(function(genre_ids){
          return accion=28
      })
      console.log(genre_ids);
  
      for (var i = 0; i < 10; i++) {
        document.querySelector(".peliculas1").innerHTML += `<a href='DetallePelicula.html?id=${masvaloradas2[i].genre_ids}'   class='mobile ' ><img src='https://image.tmdb.org/t/p/w500${masvaloradas2[i].poster_path}'   alt='${masvaloradas2[i].title}' /></a>`
      }
    })
  

  
    })