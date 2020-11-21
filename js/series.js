window.addEventListener('load', function(){
fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(datos) {
    var masvaloradas1 = datos.results
    
    //console.log(datos+'------------------')//
    for (var i = 0; i < 10; i++) {
      
      //articulo.innerHTML += `<a href='detallePelicula.html?id=${populares.results[i].id}&titulo=${populares.results[i].title}'>  <img src='https://image.tmdb.org/t/p/w500${populares.results[i].poster_path}' alt = '${populares.results[i].title}' /> </a>//

      document.querySelector('.series1').innerHTML += `<a href='detalleSerie.html?id=${masvaloradas1[i].id}'   class='mobile ' ><img src='https://image.tmdb.org/t/p/w500${masvaloradas1[i].poster_path}'   alt='${masvaloradas1[i].title}' /></a>`
    }
  })

  fetch("https://api.themoviedb.org/3/tv/popular?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES&page=1")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(datos) {
    var populares1 = datos.results
    

    for (var i = 0; i < 10; i++) {
      document.querySelector('.series2').innerHTML += `<a href='detalleSerie.html?id=${populares1[i].id}'   class='mobile ' ><img src='https://image.tmdb.org/t/p/w500${populares1[i].poster_path}'   alt='${populares1[i].title}' /></a>`
    }
  })
  
  fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=239cb21a3c20983f2c69678890e9289a")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(datos) {
    var trending1 = datos.results
    

    for (var i = 0; i < 10; i++) {
      document.querySelector('.series3').innerHTML += `<a href='detalleSerie.html?id=${trending1[i].id}'   class='mobile ' ><img src='https://image.tmdb.org/t/p/w500${trending1[i].poster_path}'   alt='${trending1[i].title}' /></a>`
    }
  })


})