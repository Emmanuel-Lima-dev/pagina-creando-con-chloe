let headerSuperior = document.querySelector(".contHeader"),
bajoMenuHeader = document.querySelector(".bajoMenu");

let cards = document.querySelectorAll(".card"),
lengthCards = cards.length;

let imagenesProducto = document.querySelectorAll( ".imgProducto" ),
lengthImagenesProducto = imagenesProducto.length;


window.addEventListener( "scroll", () => {

    let y = window.scrollY;
    

    if ( y > 20  ){
        headerSuperior.classList.add("achicarNavbar");
    } else {
        headerSuperior.classList.remove("achicarNavbar");
    }

    for ( let i = 0; i < lengthCards ; i++ ){
         
        let distancia = cards[i].getBoundingClientRect().top;
        let altura = window.innerHeight;

        if ( distancia < altura ){
            cards[i].classList.add("aparece");
        }
    }

    for ( let i = 0; i < lengthImagenesProducto ; i++ ){
         
        let distancia = imagenesProducto[i].getBoundingClientRect().top;
        let altura = window.innerHeight;

        if ( distancia < altura ){
            imagenesProducto[i].classList.add("aparece");
        }
    }

} );