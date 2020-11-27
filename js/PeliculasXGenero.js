window.addEventListener('load', function(){
    var querystring = location.search
    var url = new URLSearchParams(querystring)
    var id = url.get('id')
    var name = url.get ('name')
    console.log(id);
    console.log(name)
fetch (`https://api.themoviedb.org/3/discover/movie?api_key=239cb21a3c20983f2c69678890e9289a&with_genres=${id}`)
.then(function(respuesta) {
    return respuesta.json()
  })
      .then(function(datos) {
    var PeliculasXGenero = datos.results
    console.log(PeliculasXGenero);

       for (var i = 0; i < PeliculasXGenero.length; i++) {
      document.querySelector(".PeliculasXGenero").innerHTML += `<a href='DetallePelicula.html?id=${PeliculasXGenero[i].id}' class='mobile ' ><img src='https://image.tmdb.org/t/p/original/`+PeliculasXGenero[i].poster_path + `' alt='${PeliculasXGenero[i].title}'></a>`
    }
  })
 

})