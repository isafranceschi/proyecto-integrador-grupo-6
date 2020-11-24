window.addEventListener('load',function(){
     fetch ("https://api.themoviedb.org/3/genre/movie/list?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES")
        .then(function(response){
        return response.json();
        })
        .then(function(resultado){
            console.log (resultado);
            var listaDeGeneros = document.querySelector ("#generoPeliculas")
            var contenidoDeGeneros = "";
                for(let i=1 ; 1 < resultado.data.length; 1++){
                    contenidoDeGeneros +=resultado.data[i].id + resultado.data[i].name
                    

                }

                listaDeGeneros.innerHTML = contenidoDeGeneros;

        })
        .catch(function(error){
            console.log("Error" + error);
        })







})