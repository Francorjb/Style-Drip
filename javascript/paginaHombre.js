const containerProductosHombre = document.querySelector(".container-hombre")
const botonCategoria = document.querySelectorAll(".btn__categoria")

function cargarProducto(productosElegidos) {
    containerProductosHombre.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <div class="tarjetas" id="tarjeta-${producto.id}">
                    <div class="tarjetas-2">
                        <img class="tarjetas-img" src=${producto.foto[0]} alt=${producto.producto}>
                        <p class="titulos">${producto.nombre}</p>
                        <p class="titulos_m"> ${producto.marca}</p>
                        <div class="precios">
                            <p class="titulo"> $ ${producto.precio}</p>
                            <button class="boton-compra" id="btn-${producto.id}">Comprar</button>
                        </div>
                    </div>
                </div> 
        `;
        containerProductosHombre.append(div);
    })
}

cargarProducto(productoshombre);

botonCategoria.forEach(boton =>{
    boton.addEventListener("click", (e) =>{
        
        botonCategoria.forEach(boton => {
            boton.classList.remove("activo")
        });
        e.currentTarget.classList.add("activo")

        if(e.currentTarget.id != "todos"){
            const productosBoton = productoshombre.filter(producto => {
                return producto.producto === e.currentTarget.id
            });
            console.log(productosBoton)
            cargarProducto(productosBoton)
        }
        else{
            cargarProducto(productoshombre)
        }
    })
})

// CARGA DE PRODUCTOS
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
            pushearArray(carrito ,cargarProductos(recorteId , productoshombre))
            localSt( "carrito" , carrito )
        }
    })
}

compras()

const carritoNuevo = datosDelLs ("carrito") || []

carrito = carritoNuevo