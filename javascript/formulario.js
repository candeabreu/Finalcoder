//EVENTOS - MENSAJE EN BOTON ENVIAR 

const botonEnviar = document.getElementById("btnEnviar")
const mensajeEnviar = document.getElementById("mensajeEnviar")
mensajeEnviar.className = "mensajeEnviar2"
const inputNombreCompleto = document.getElementById("full-name")
const inputEmail = document.getElementById("email")
const inputNumero = document.getElementById("number")
const inputMensaje = document.getElementById("massege")
const respuestaMensaje = document.getElementById("areaDeMensaje")
const formulario = document.getElementById("formularioContacto")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target)
   

    if (inputNombreCompleto.value == "" || inputEmail.value == "" || inputNumero.value == "" || inputMensaje.value == "") {
        mensajeEnviar.innerText = "Complete todos los campos requeridos"
    } else {
        mensajeEnviar.innerText = "Mensaje enviado"
    }

})

// Guardar nombre en Local Storage

function guardarLS2(valores) {
    let datosUsuario = {
        Nombre: inputNombreCompleto.value,
        Email: inputEmail.value,
        Numero: inputNumero.value,
        Mensaje: inputMensaje.value
    };

    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario))

}

botonEnviar.addEventListener("click", () => {

    if (inputMensaje.value == "") {
        areaDeMensaje.innerText = "Escriba su consulta o comentario"
    } else if (inputNombreCompleto.value == "" || inputEmail.value == "" || inputNumero.value == "") {
        areaDeMensaje.innerText = ""

    } else {
        areaDeMensaje.innerText = "Recibimos su mensaje, sera respondido a la brevedad a los datos anteriormente solicitados"
    }
    guardarLS2()
})