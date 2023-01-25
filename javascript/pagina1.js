let carrito = []

const containerProductos = document.querySelector(".container-img")

const ropa = (array) => {
    const arrayNuevo = array.reduce((acc , element) =>{
        return acc + `
        <div class="tarjetas" id="tarjeta-${element.id}">
            <div class="tarjetas-2">
                <img class="tarjetas-img" src=${element.foto[0]} alt=${element.producto}>
                <p class="titulos">${element.nombre}</p>
                <p class="titulos_m"> ${element.marca}</p>
                <div class="precios">
                    <p class="titulo"> $ ${element.precio}</p>
                    <button class="boton-compra" id="btn-${element.id}">Comprar</button>
                </div>
            </div>
        </div> 
        `
    }, "")
    return arrayNuevo
}

containerProductos.innerHTML = ropa(productosOferta)

const localSt = (clave , valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const pushearArray = (array , value) => {
    array.push(value)
} 

const cargarProductos = (producto , array) =>{
    return array.find( product =>{
        return product.id === Number(producto)
    })
}

const datosDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

const compras = () => {
    const botonCompra = document.querySelectorAll(".boton-compra")
    botonCompra.forEach( element => {
        element.onclick = () => {
            const recorte = element.id.slice(4)
            pushearArray(carrito ,cargarProductos(recorte , productosOferta))
            localSt( "carrito" , carrito )
        }
    })
}
compras()


const carritoNuevo = datosDelLs ("carrito") || []

carrito = carritoNuevo

// CARRUSEL
const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});