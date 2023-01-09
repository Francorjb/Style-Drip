const datosDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

let carrito = datosDelLs("carrito")

const ropa = (array) => {
    const arrayNuevo = array.reduce((acc , element) =>{
        return acc + `
        <div class="carro-central">
            <div class="carro-id" id="car-${element.id}">
                <img class="img-carro" src=${element.foto[0]} alt=${element.color}>
                <h2 class="carro-tag">${element.producto}</h2>
                <h3 class="carro-tag"> $ ${element.precio}</h3>
                <button class="btn-eliminar" id="boton-${element.id}">Eliminar</button>
            </div> 
        </div>
        `
    }, "")
    return arrayNuevo
}

const contenedorCarrito = document.querySelector(".elementos-carro")
contenedorCarrito.innerHTML = ropa(datosDelLs("carrito"))

// const borrarProductos = () =>{
//     const producCarrito = document.querySelectorAll(".carro-central")
//     for (let i = 0; i < producCarrito.length; i++) {
//         producCarrito[i].onclick = () =>{
//             const separar = producCarrito[i].id.slice(3)
//             const filtradoProductos = carrito.filter((filtrado , index) =>{
//                 return filtrado.id != separar
//             })
//             carrito = filtradoProductos
//             localStorage.setItem("carrito",JSON.stringify(carrito))
//             contenedorCarrito.innerHTML = ropa(carrito)
//             borrarProductos()
//         }
//     }
// }

// borrarProductos()