//window.addEventListener('load',function(){
 
   // let dato = location.search//
   // let datoObjecto=new URLSearchParams(dato)//
   // let id = datoObjecto.get("id")//
  //  console.log (id) //
  //  let type = datoObjecto.get("type")//
  //  console.log(type) //  



window.onload = function () {

    var datoObjecto=new URLSearchParams(location.search)
    var id= datoObjecto.get("id")
    var tipo = datoObjecto.get("tipo")
    console.log ("la peli elegida es: "+ id)
    console.log (tipo)
}


   


    if (tipo == "movie"){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES`)
        .then(function (response){
            return response.json()

        })
        
    }
    else{
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=239cb21a3c20983f2c69678890e9289a&language=es-ES`)
        .then(function (response){
            return response.json()
        })
        .then(function (Object){
            console.log (Object.title);
            var review = "fetch"
            var titulojs= document.querySelector("#titulojs")
            titulojs.innerHTML+=
            ` <h1 id="tituloPelicula">${Object.title}</h1>
            `
        })

    }




  