const datosDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

let carrito = datosDelLs("carrito")

const contenedorCarrito = document.querySelector(".elementos-carro")

const ropa = (array) => {
    const arrayOferta = array.reduce((acc , element) =>{
        return acc + `
        <div class="carro" id="carrito_${element.id}">
            <div class="carrito__producto">
                <img class="carrito__img" src=${element.foto[0]} alt=${element.producto}>
                <div class="carrito__nombre">
                    <small> ${element.nombre} </small>
                    <p> ${element.producto} </p>
                </div>
                <div class="carrito__cantidad">
                    <small> Cantidad </small>
                    <p> $${element.cantidad} </p>
                </div>
                <div class="carrito__precio">
                    <small> Precio </small>
                    <p> $${element.precio} </p>
                </div>
                <div class="carrito__total">
                    <small> Subtotal </small>
                    <p> 1000 </p>
                </div>
                <button class="btn__eliminar" id="boton_${element.id}">
                    <img src="../asset/iconos/basura.png">
                </button>
            </div>
        </div> 
        `
    }, "")
    return arrayOferta
}

contenedorCarrito.innerHTML = ropa(datosDelLs("carrito"))

const borrarProductos = () =>{
    const producCarrito = document.querySelectorAll(".btn__eliminar")
    for (let i = 0; i < producCarrito.length; i++) {
        producCarrito[i].onclick = () =>{
            const separar = producCarrito[i].id.slice(6)
            const filtradoProductos = carrito.filter((element) =>{
                return element.id != separar
            })
            carrito = filtradoProductos
            localStorage.setItem("carrito",JSON.stringify(carrito))
            contenedorCarrito.innerHTML = ropa(carrito)
            borrarProductos()
        }
    }
}
borrarProductos()