window.addEventListener('load', function(){
    let querystring = location.search
    let url = new URLSearchParams(querystring)
    let id = url.get('id')
    let name = url.get ('name')
    console.log(id);
    console.log(name)
fetch (`https://api.themoviedb.org/3/discover/movie?api_key=239cb21a3c20983f2c69678890e9289a&with_genres=${id}`)
.then(function(respuesta) {
    return respuesta.json()
  })
      .then(function(datos) {
    let PeliculasXGenero = datos.results
    console.log(PeliculasXGenero);

       for (let i = 0; i < PeliculasXGenero.length; i++) {
      document.querySelector(".PeliculasXGenero").innerHTML += '<a class="mobile " ><img src="https://image.tmdb.org/t/p/original/' + PeliculasXGenero[i].poster_path + '" alt=""></a>'
    }
  })
 

})