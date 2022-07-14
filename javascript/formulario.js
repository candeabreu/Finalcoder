//EVENTOS - MENSAJE EN BOTON ENVIAR 

const botonEnviar = document.getElementById("btnEnviar")
const mensajeEnviar = document.getElementById("mensajeEnviar")
mensajeEnviar.className = "mensajeEnviar2"
const inputNombreCompleto = document.getElementById("full-name")
const inputEmail = document.getElementById("email")
const inputNumero = document.getElementById("number")
const inputMensaje = document.getElementById("massege")
const respuestaMensaje = document.getElementById("areaDeMensaje")


botonEnviar.addEventListener("click", () => {

    if (inputNombreCompleto.value == "" || inputEmail.value == "" || inputNumero.value == "") {
        mensajeEnviar.innerText = "Complete todos los campos requeridos"
    } else {

        mensajeEnviar.innerText = `Los datos ingresados son:
         \n ${inputNombreCompleto.value} 
         \n ${inputEmail.value}
         \n ${inputNumero.value}`
    }
    if (inputMensaje.value == "") {
        areaDeMensaje.innerText = "Escriba su consulta o comentario"
    } else if (inputNombreCompleto.value == "" || inputEmail.value == "" || inputNumero.value == "") {
        areaDeMensaje.innerText = ""

    } else {
        areaDeMensaje.innerText = "Recibimos su mensaje, sera respondido a la brevedad a los datos anteriormente solicitados"
    }
})