window.addEventListener('load',function(){
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES&page=1")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(datos) {
        var masvaloradas2 = datos.results
        console.log(masvaloradas2);
    
        for (var i = 0; i < 10; i++) {
          document.querySelector(".peliculas1").innerHTML += '<a class="mobile " ><img src="https://image.tmdb.org/t/p/original/' + masvaloradas2[i].poster_path + '" alt=""></a>'
        }
      })
    
      fetch("https://api.themoviedb.org/3/movie/latest?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(datos) {
        var ultimoslanzamientos2 = datos.results
        console.log(ultimoslanzamientos2);
    
        for (var i = 0; i < 10; i++) {
          document.querySelector(".peliculas2").innerHTML += '<a class="mobile " ><img src="https://image.tmdb.org/t/p/original/' + ultimoslanzamientos2[i].poster_path + '" alt=""></a>'
        }
      })
      
      fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=239cb21a3c20983f2c69678890e9289a")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(datos) {
        var trending2 = datos.results
        console.log(trending2);
    
        for (var i = 0; i < 10; i++) {
          document.querySelector(".peliculas3").innerHTML += '<a class="mobile " ><img src="https://image.tmdb.org/t/p/original/' + trending2[i].poster_path + '" alt=""></a>'
        }
      })
    
    
    })