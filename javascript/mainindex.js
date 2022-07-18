//formulario de ingreso

const formularioBienvenida = document.getElementById ("formularioDeBienvenida")
const nombreDeIngresoBienvenida = document.getElementById ("full-name2")
const botonOkBienvenida = document.getElementById ("btnOk")
const h2 = document.getElementById("parrafoBienvenida")
h2.className = "parrafoBienvenida2"

// Guardar nombre en Local Storage

function guardarLS () {
let nombreIndex = { Nombre: nombreDeIngresoBienvenida.value}
    localStorage.setItem ('datosUsuarioIndex', JSON.stringify(nombreIndex))
}


formularioBienvenida.addEventListener ("submit" , (e)=> {
    e.preventDefault();
    console.log (e.target)
   
    if (nombreDeIngresoBienvenida.value == "") {
        h2.innerText =`TE DAMOS LA BIENVENIDA ${nombreDeIngresoBienvenida.value} A MIRE TIENDA DE NIÑOS/AS - 3 Y 6 CUOTAS SIN INTERES `;
    } 
})
 
botonOkBienvenida.addEventListener("click", () => {
    h2.innerText =`TE DAMOS LA BIENVENIDA ${nombreDeIngresoBienvenida.value} A MIRE TIENDA DE NIÑOS/AS - 3 Y 6 CUOTAS SIN INTERES `;
    guardarLS ()
})