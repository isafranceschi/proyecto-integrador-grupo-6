window.addEventListener('load', function(){
    let miListaDeFavoritas =  JSON.parse(localStorage.getItem('miLista'))
    console.log(miListaDeFavoritas);
    //let peliculas = document.querySelector('.')
    for(let i = 0; i < miListaDeFavoritas.length; i++){
        console.log(populares.results[i].poster_path);
        let articulo = document.createElement('article')
        articulo.classList.add('articulo')
        articulo.innerHTML += `<a href='detallePelicula.html?id=${miListaDeFavoritas[i].id}&titulo=${miListaDeFavoritas[i].title}'>  <img src='https://image.tmdb.org/t/p/w500${miListaDeFavoritas[i].poster_path}' alt = '${miListaDeFavoritas[i].title}' /> </a> 
        <div>
            <a  class='btn btn-danger btn-block ' href='javascript:;' onclick= 'sacarDeMiLista(${miListaDeFavoritas[i].id})'  >Sacar de mi lista </a>
        </div>
        `
        peliculas.append(articulo)
    }
    let botonMiLista = document.querySelectorAll('.botonMiLsta')
    let arrayMiListaDeFavoritas;
    console.log(botonMiLista)
    botonMiLista.forEach(pelicula => {
        pelicula.addEventListener('click', function(e){
            e.preventDefault()
            let miListadePeliculas = localStorage.getItem('miLista')
            if(miListadePeliculas == null){
                arrayMiListaDeFavoritas = [];
            }else{
                arrayMiListaDeFavoritas = JSON.parse(miListadePeliculas)
            }
            //Si no les funciona de esta forma
            //-------------------------------------------------
            //arrayMiListaDeFavoritas.push(JSON.parse(this.id))
            //--------------------------------------------------
            //Pueden utilizar esta otra forma de atrapar el elemento
            //-----------------------------------------------------
            arrayMiListaDeFavoritas.push(JSON.parse(e.target.href))
            //-----------------------------------------------------    
            localStorage.setItem('miLista', JSON.stringify(arrayMiListaDeFavoritas))
        } )
    });

})
