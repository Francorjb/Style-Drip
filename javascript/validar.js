const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let enter = false
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length < 5){
        warnings += `El nombre no es valido <br>`
        enter = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `el email no es valido <br>`
        enter = true
    }
    if(password.value.length < 8  ){
        warnings += `la contraseña no es valida <br>`
        enter = true
    }
    if(enter ){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "enviado"
    }
})

// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/