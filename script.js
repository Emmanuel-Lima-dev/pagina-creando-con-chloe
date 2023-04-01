let headerSuperior = document.querySelector(".contHeader"),
bajoMenuHeader = document.querySelector(".bajoMenu");

let cards = document.querySelectorAll(".card"),
lengthCards = cards.length;

let imagenesProducto = document.querySelectorAll( ".imgProducto" ),
lengthImagenesProducto = imagenesProducto.length;

let menuHambur = document.querySelector(".menuHambur");

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
    let menuDesplegable = document.querySelector(".menuDesplegable");
    menuDesplegable.classList.toggle( "desplegarNavbar" );

    span1=document.querySelector(".span1"),
    span2=document.querySelector(".span2"),
    span3=document.querySelector(".span3");

    span1.classList.toggle("span1efecto");  
    span2.classList.toggle("span2efecto");
    span3.classList.toggle("span3efecto");

} );




