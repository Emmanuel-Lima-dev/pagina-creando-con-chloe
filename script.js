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

// efectos de escroll
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

//ampliar imagen
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

//menu desplegable responsive
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


//auto mensaje whatsapp
setTimeout(() => {
    
    let mensajeWhatsapp = document.querySelector( ".mensajeWhatsapp" );
    let trianguloChat = document.querySelector( ".contAnclajeWhatsappAfter" );

    setTimeout(() => {
        mensajeWhatsapp.classList.remove( "apareceFlex" );
        trianguloChat.classList.remove( "apareceFlex" );
    }, "15000");

    mensajeWhatsapp.classList.add( "apareceFlex" );
    trianguloChat.classList.add( "apareceFlex" );
    
  }, "5000");


let cantidad = document.querySelector("#cantidad");
let total = document.querySelector("#total");
let enviarTotal = document.querySelector("#enviarNumero");

enviarTotal.addEventListener( "click", (e) => {
    e.preventDefault();

    if( cantidad.value < 10 ){
        return total.value = cantidad.value * 400;
    } else {
        return total.value = cantidad.value * 300;
    }
    
    
} );
let btnEnviar = document.querySelector("#btnEncargar");
btnEnviar.href = `https://api.whatsapp.com/send?phone=+541159118096&amp;text=Hola,%20¿para%20hacerte%20un%20pedido%20de%20${total.value}%20difusores?`