window.onload = function () {

var datoObjecto=new URLSearchParams(location.search)
var id= datoObjecto.get("id")


    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES`)
    .then(function (response){
        
        response.json().then(function(response){
            console.log(response)
            document.getElementById("tituloSerie").innerHTML = response.name
            document.getElementById("portada").src = "https://image.tmdb.org/t/p/w500" + response.poster_path
            document.getElementById("resumen").innerHTML = response.overview
        })
    })


}

//Agregar a mi Lista
let botonMiLista = document.querySelectorAll('.buttonfavs')
let arrayMiListaDeFavoritas;
//console.log(botonMiLista)
botonMiLista.forEach(pelicula => {
    pelicula.addEventListener('click', function(e){
        e.preventDefault()
        let miListadePeliculas = localStorage.getItem('miLista')
        if(miListadePeliculas == null){
            arrayMiListaDeFavoritas = [];
        }else{
            arrayMiListaDeFavoritas = JSON.parse(miListadePeliculas)
        }
        arrayMiListaDeFavoritas.push(JSON.parse(this.id))
        localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))

    } )

});

