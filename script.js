let headerSuperior = document.querySelector(".contHeader"),
bajoMenuHeader = document.querySelector(".bajoMenu");

let cards = document.querySelectorAll(".card"),
lengthCards = cards.length;

let imagenesProducto = document.querySelectorAll( ".imgProducto" ),
lengthImagenesProducto = imagenesProducto.length;

let menuHambur = document.querySelector(".menuHambur");

let itemsMenuDesplegable = document.querySelectorAll( ".itemMenuDesplegable" ),
lengthItemMenuDesplegable = itemsMenuDesplegable.length;

let menuDesplegable = document.querySelector(".menuDesplegable");

window.addEventListener( "scroll", () => {

    let y = window.scrollY;
    

    if ( y > 15  ){
        headerSuperior.classList.add("achicarNavbar");
    } else {
        headerSuperior.classList.remove("achicarNavbar");
    }

    for ( let i = 0; i < lengthCards ; i++ ){
         
        let distancia = cards[i].getBoundingClientRect().top;
        let altura = window.innerHeight;

        if ( distancia + 100 < altura ){
            cards[i].classList.add("aparece");
        }
    }

    for ( let i = 0; i < lengthImagenesProducto ; i++ ){
         
        let distancia = imagenesProducto[i].getBoundingClientRect().top;
        let altura = window.innerHeight;

        if ( distancia + 100 < altura ){
            imagenesProducto[i].classList.add("aparece");
        }
    }

} );

for( let i = 0; i < lengthImagenesProducto; i++ ){
    imagenesProducto[i].addEventListener( "click", () => {
    let contImagenProducto = document.querySelectorAll( ".contImagenProducto" );
    contImagenProducto[i].classList.add("ampliarImg");
    let botonX = document.querySelector(".btnCerrarImg");

    botonX.classList.add("apareceFlex");
    botonX.addEventListener( "click", () => {
        contImagenProducto[i].classList.remove("ampliarImg");
        botonX.classList.remove("apareceFlex");
    } );
} )
}


menuHambur.addEventListener( "click", () => {
    
    menuDesplegable.classList.toggle( "desplegarNavbar" );

    span1=document.querySelector(".span1"),
    span2=document.querySelector(".span2"),
    span3=document.querySelector(".span3");

    span1.classList.toggle("span1efecto");  
    span2.classList.toggle("span2efecto");
    span3.classList.toggle("span3efecto");

    for ( let i = 0; i < lengthItemMenuDesplegable; i ++ ){

        itemsMenuDesplegable[i].addEventListener( "click", () => {
            menuDesplegable.classList.remove( "desplegarNavbar" );
            span1.classList.remove("span1efecto");  
            span2.classList.remove("span2efecto");
            span3.classList.remove("span3efecto");
        } );
    
    }

} );




