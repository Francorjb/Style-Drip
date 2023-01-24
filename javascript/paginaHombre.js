const containerProductosHombre = document.querySelector(".container-hombre")
const botonCategoria = document.querySelectorAll(".btn__categoria")
const ropa = (array) => {
    const nuevoArray = array.reduce((acc , element) =>{
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
    return nuevoArray
    
}
containerProductosHombre.innerHTML = ropa(productoshombre);

