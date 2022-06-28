//MENSAJE BIENVENIDA

let nombreIngresado = prompt("Ingresar nombre")
let apellidoIngresado = prompt("Ingresar apellido")


if ((nombreIngresado != "") && (apellidoIngresado != "")) {

    console.log("El nombre del usuario es:" + "" + nombreIngresado + "" + apellidoIngresado);
} else {
    console.log("Error: Ingresar nombre y apellido")
}


function bienvenida() {
    alert(nombreIngresado + "" + " te damos la bienvenida a Mire Tienda de niños!")
}

bienvenida()

//SWITCH 
//SELECCION DE PRODUCTO

let seleccionCategorias = prompt("Seleccione un producto: \n 1-Tren de madera  \n 2-Disfraz de superheroe  \n 3-Rompecabezas grande \n 4-Cuento de mosntruos");

switch (seleccionCategorias) {
    case "1":
        alert("Seleccionaste tren de madera Valor $300");
        break;

    case "2":
        alert("Seleccionaste disfraz de superheroe Valor $300");
        break;

    case "3":
        alert("Seleccionaste rompecabezas Valor $300");
        break;

    case "4":
        alert("Seleccionaste cuento de mosntruos Valor $300 ");
        break;

    default:
        alert("Dato Invalido")
        break;

}

//Calcular precio por cantidad

let ingreso = prompt("Ingresar cantidad deseada")
ingreso = parseInt(ingreso)
let valor = 300

if (isNaN(ingreso)) {
    console.log("El valor ingresado no es un numero")
} else {
    let result = ingreso * valor;
    console.log(ingreso + "x" + valor + "=" + result);
    alert("El total a pagar es: $" + result);
}

function gracias() {
    alert("Gracias " + "" + nombreIngresado + "" + " por tu compra! \n A continuacion completa los datos y elije los medios de pago")
}

gracias();

//DATOS DEL COMPRADOR
function crearPersona(mensaje) {

    let dato = prompt(mensaje);
    return dato;

}

let nombreCompleto = crearPersona("Ingresar tu nombre completo");
let edad = crearPersona("Ingresar tu edad");
let localidad = crearPersona("Ingresar tu localidad");
let direccion = crearPersona("Ingresar tu direccion");
let email = crearPersona("Ingresar tu email");

console.log("Datos del usuario:")
console.log(nombreCompleto);
console.log(edad);
console.log(localidad);
console.log (direccion);
console.log(email);

//BUCLES POR CONDICION WHILE

let ingresoDeComentario = prompt("De ser necesario, ingrese un comentario sobre su compra \n De lo contrario, para finalizar ingresa la palabra: pagar")

while (ingresoDeComentario != "pagar") {
    console.log("Informacion adicional sobre la compra:" + ingresoDeComentario)
    //ACTUALIZAR PARA QUE EN ALGUN MOMENTO SEA FALSO
    ingresoDeComentario = prompt("De ser necesario, ingrese un comentario sobre su compra \n De lo contrario, para finalizar ingresa la palabra: pagar")
}


//SELECCION DE MEDIO DE PAGO

let ingresoPagos = prompt(nombreIngresado + " ingresa una opcion \n 1-Pago en efectivo \n 2-Pago con debito \n 3-Pago con tarjeta \n 4-Pago por transferencia");

switch (ingresoPagos) {
    case "1":
        console.log("Seleccionaste pago en efectivo");
        break;

    case "2":
        console.log("Seleccionaste pago con debito");
        break;

    case "3":
        console.log("Seleccionaste pago con tarjeta");
        break;

    case "4":
        console.log("Seleccionaste pago por transferencia");
        break;

    default:
        console.log("Dato Invalido")
        break;

}
if (ingresoPagos == "0") {
    alert("¡Gracias, que tengas un buen dia!");
}


function gracias2() {
    alert("Gracias " + "" + nombreIngresado + "" + " por tu compra! \n Te enviaremos un mail para que realices el seguimiento")
}

gracias2();