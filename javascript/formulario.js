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
        mensajeEnviar = Toastify({
            text: "Complete todos los datos requeridos",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #EB1D36 , #EB1D36)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        mensajeEnviar = Toastify({
            text: "Mensaje enviado",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #EB1D36 , #EB1D36)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
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

    if (inputMensaje.value == "" ) {
        areaDeMensaje = Toastify({
            text: "Escriba su mensaje o consulta",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #EB1D36 , #EB1D36)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else if (inputNombreCompleto.value == "" || inputEmail.value == "" || inputNumero.value == "") {
        areaDeMensaje.innerText = ""

    } else {
        areaDeMensaje = Toastify({
            text: "Serás contactado a la brevedad",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #EB1D36 , #EB1D36)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    guardarLS2()
})