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

function catalogo() {
    console.log("Te mostramos nuestro catalogo de productos")
}
catalogo()

//ARRAY CON METODO PUSH PARA AGREGAR UN JUEGO EN EL CATALOGO
const catalogoDeProductos = ["Trenes de mandera rojo", "Trenes de mandera verde", "Trenes de mandera azul", "Rompecabezas de 5 piezas", "Rompecabezas de 10 piezas", "Rompecabezas de 25 piezas", "Disfraces", "Libros infantiles"]
catalogoDeProductos.push ("Juegos de encastre")
console.log (catalogoDeProductos)

//SWITCH 
//SELECCION DE PRODUCTO

let categoriaSeleccion = false
let trenColores = false
let disfraces = false
let rompecabezasSeleccion = false
let cuentosSeleccion = false

while (categoriaSeleccion == false) {

    let seleccionCategorias = prompt("Seleccione un producto: \n 1-Tren de madera  \n 2-Disfraces  \n 3-Rompecabezas grande \n 4-Cuento infantiles \n 5- Juegos de encastre");

    switch (seleccionCategorias) {
        case "1":
            alert("Seleccionaste tren de madera Valor $300");
            categoriaSeleccion = true
            let coloresTren = prompt("Seleccione un color: \n 1- Verde \n 2-Rojo \n 3-Azul")
            while (trenColores == false) {
                switch (coloresTren) {
                    case "1":
                        alert("Seleccionaste color verde")
                        trenColores = true
                        break;
                    case "2":
                        alert("Seleccionaste color rojo")
                        trenColores = true
                        break;
                    case "3":
                        alert("Seleccionaste color azul")
                        trenColores = true
                        break;
                    default:
                        alert("Dato Invalido")
                        break;
                }
            }
            break;

        case "2":
            alert("Seleccionaste disfraces Valor $300");
            categoriaSeleccion = true
            let disfracesSeleccion = prompt("Seleccione tipo de disfraz: \n 1- Hombre Araña \n 2- Princesa  \n 3- Hulk");
            while (disfraces == false) {
                switch (disfracesSeleccion) {
                    case "1":
                        alert("Seleccionaste disfraz de hombre araña")
                        disfraces = true
                        break;
                    case "2":
                        alert("Seleccionaste disfraz de princesa")
                        disfraces = true
                        break;
                    case "3":
                        alert("Seleccionaste disfraz de hulk")
                        disfraces = true
                        break;
                    default:
                        alert("Dato Invalido")
                        break;
                }
            }
            break;

        case "3":
            alert("Seleccionaste rompecabezas Valor $300");
            categoriaSeleccion = true
            let rompecabezas = prompt("Seleccione cantidad de piezas: \n 1- 5 Piezas \n 2- 10 piezas  \n 3- 25 piezas")
            while (rompecabezasSeleccion == false) {
                switch (rompecabezas) {
                    case "1":
                        alert("Seleccionaste rompecabezas de 5 piezas")
                        rompecabezasSeleccion = true
                        break;
                    case "2":
                        alert("Seleccionaste rompecabezas de 10 piezas")
                        rompecabezasSeleccion = true
                        break;
                    case "3":
                        alert("Seleccionaste rompecabezas de 25 piezas")
                        rompecabezasSeleccion = true
                        break;
                    default:
                        alert("Dato Invalido")
                        break;
                }
            }
            break;

        case "4":
            alert("Seleccionaste cuentos infantiles $300 ");
            categoriaSeleccion = true
            let cuentos = prompt("Seleccione titulo de cuento \n 1- Perdido y encontrado de Oliver Jeffers \n 2- Atrapado de Oliver Jeffers  \n 3- El zoo de Joaquin de Pablo Bernasconi")
            while (cuentosSeleccion == false) {
                switch (cuentos) {
                    case "1":
                        alert("Seleccionaste el titulo Perdido y encontrado de Oliver Jeffers")
                        cuentosSeleccion = true
                        break;
                    case "2":
                        alert("Seleccionaste el titulo Atrapado de Oliver Jeffers")
                        cuentosSeleccion = true
                        break;
                    case "3":
                        alert("Seleccionaste el titulo El zoo de Joaquin de Pablo Bernasconi ")
                        cuentosSeleccion = true
                        break;
                    default:
                        alert("Dato Invalido")
                        break;
                }
            }
            break;
        case "5":
            alert("Seleccionaste juegos de encastre $300 ");
            categoriaSeleccion = true;
            break;
        default:
            alert("Dato Invalido")
            break;

    }
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
console.log(direccion);
console.log(email);

//BUCLES POR CONDICION WHILE

let ingresoDeComentario = prompt("De ser necesario, ingrese un comentario sobre su compra \n De lo contrario, para finalizar ingresa la palabra: pagar")

while (ingresoDeComentario != "pagar") {
    console.log("Informacion adicional sobre la compra:" + ingresoDeComentario)
    //ACTUALIZAR PARA QUE EN ALGUN MOMENTO SEA FALSO
    ingresoDeComentario = prompt("De ser necesario, ingrese un comentario sobre su compra \n De lo contrario, para finalizar ingresa la palabra: pagar")
}


//SELECCION DE MEDIO DE PAGO
//WHILE PARA VALIDAR QUE LA INFORMACION ES VERDADERA
let pagos = false
while (pagos == false) {
    let ingresoPagos = prompt(nombreIngresado + " ingresa una opcion \n 1-Pago en efectivo \n 2-Pago con debito \n 3-Pago con tarjeta \n 4-Pago por transferencia");

    switch (ingresoPagos) {
        case "1":
            console.log("Seleccionaste pago en efectivo");
            pagos = true
            break;

        case "2":
            console.log("Seleccionaste pago con debito");
            pagos = true
            break;

        case "3":
            console.log("Seleccionaste pago con tarjeta");
            pagos = true
            break;

        case "4":
            console.log("Seleccionaste pago por transferencia");
            pagos = true
            break;

        default:
            console.log("Dato Invalido")
            break;

    }
    if (ingresoPagos == "0") {
        alert("¡Gracias, que tengas un buen dia!");
    }

}


function gracias2() {
    alert("Gracias " + "" + nombreIngresado + "" + " por tu compra! \n Te enviaremos un mail para que realices el seguimiento")
}

gracias2();