window.addEventListener('load',function(){


  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=239cb21a3c20983f2c69678890e9289a&language=es-Es')
  .then(function(respuesta) {
    return respuesta.json()
    })
  .then(function(peliculasG) {
    peliculasG.genres.forEach(genero => {
      nombreGenero.push(genero.name)
      idGenero.push (genero.id)
      console.log(idGenero);
      console.log(nombreGenero);
    })
   
  //let selectgeneroPeliculas =document.querySelector('#generoPeliculas')
  /*function cargarGeneroPeliculas(){
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=239cb21a3c20983f2c69678890e9289a&language=es-Es')
    .then(function(respuesta){
      //console.log(respuesta.json())
      return respuesta.json()
    })
    .then(function(datosGeneroPeliculas){
      //console.log(datosProvincias.provincias)
      //Aquí le incorporo elementos html desde javascript
      selectgeneroPeliculas.innerHTML = "<option value = ''>Seleccione provincia... </option>"
      for (let dato of datos.GeneroPeliculas.id){
        //console.log(dato)
        let generoPeliculas = document.createElement('option')
        generoPeliculas.setAttribute('value',dato.id)
        generoPeliculas.innerHTML = dato.nombre
        selectgeneroPeliculas.append(generoPeliculas)
      }
    })
  }*/

  /*fetch("")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var generoPeliculas = datos.results
      console.log(generoPeliculas);
  
      for (var i = 0; i < 10; i++) {
        document.querySelector(".generoPeliculas").innerHTML += `<a href='DetallePelicula.html?id=${generoPeliculas[i].genre_ids}'   class='mobile ' ><img src='https://image.tmdb.org/t/p/w500${generoPeliculas[i].poster_path}'   alt='${generoPeliculas[i].title}' /></a>`
      }
      
    })*/

    /*fetch("https://api.themoviedb.org/3/discover/tv?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var generoSeries = datos.results
      console.log(generoSeries);
  
      for (var i = 0; i < 10; i++) {
        document.querySelector(".generoSeries").innerHTML += `<a href='DetallePelicula.html?id=${generoSeries[i].genre_ids}'   class='mobile ' ><img src='https://image.tmdb.org/t/p/w500${generoSeries[i].poster_path}'   alt='${generoSeries[i].title}' /></a>`
      }
    })*/
  
    })