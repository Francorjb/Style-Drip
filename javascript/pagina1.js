let carrito = []

const containerProductos = document.querySelector(".container-img")

const ropa = (array) => {
    const arrayNuevo = array.reduce((acc , element) =>{
        return acc + `
        <div class="tarjetas" id="tarjera-${element.id}">
            <div  class="tarjetas-2">
                <img class="tarjetas-img" src=${element.foto[0]} alt=${element.color}>
                <h2 class="titulos">${element.producto}</h2>
                <h3 class="titulos"> $ ${element.precio}</h3>
                <button class="boton-compra" id="btn-${element.id}">Añadir al carrito</button>
            </div>
        </div> 
        `
    }, "")
    return arrayNuevo
}

containerProductos.innerHTML = ropa(productos)

const pushearArray = (array , value) => {
    array.push(value)
} 

const localSt = (clave , valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
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
            const recorteId = element.id.slice(4)
            // const filtrado = productos.find(producto => {
            //     return producto.id === Number(recorteId)})
            pushearArray(carrito ,cargarProductos(recorteId,productos))
            localSt( "carrito" , carrito )
        }
    })
}

compras()


const carritoNuevo = datosDelLs ("carrito") || []

carrito = carritoNuevo