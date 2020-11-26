window.addEventListener('load',function(){
var generoPeliculas = document.querySelector ('.generoPeliculas')

  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=239cb21a3c20983f2c69678890e9289a&language=es-Es')
  .then(function(respuesta) {
    return respuesta.json()
    })
  .then(function(peliculasG) {

    peliculasG.genres.forEach(genero => {
      
    generoPeliculas.innerHTML += `<li> <a href='PeliculasXGenero.html?id=${genero.id}&name=${genero.name}'    class='mobile ' > ${genero.name} </a>
 </li>`
    })
    })
    })