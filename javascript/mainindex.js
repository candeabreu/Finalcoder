//MENSAJE GENERAL DE BIENVENIDA

saludar = () => {
    alert("¡ Hola , estas en la Tienda On Line de Mire !  ");
};

saludar()


let nombreIngresado = prompt("Ingresar nombre")
let apellidoIngresado = prompt("Ingresar apellido")


if ((nombreIngresado != "") && (apellidoIngresado != "")) {

    console.log("El nombre del usuario es:" + "" + nombreIngresado + "" + apellidoIngresado);
} else {
    console.log("Error: Ingresar nombre y apellido")
}

//CREAR UN TITULO DESDE JS Y EDITADO EN CSS
const h2 = document.getElementById("parrafoBienvenida")

h2.innerHTML = "TE DAMOS LA BIENVENIDA " + nombreIngresado + " A MIRE TIENDA DE NIÑOS/AS - 3 Y 6 CUOTAS SIN INTERES "

h2.className = "parrafoBienvenida2"


function bienvenida() {
    alert(nombreIngresado + "" + " bienvenido/a!")
}

bienvenida()

function catalogo() {
    console.log("Te mostramos nuestro catalogo de productos")
}
catalogo()

//ARRAY CON METODO PUSH PARA AGREGAR UN JUEGO EN EL CATALOGO
//const catalogoDeProductos = ["Tren de mandera rojo", "Tren de mandera verde", "Tren de mandera azul", "Rompecabezas de 5 piezas", "Rompecabezas de 10 piezas", "Rompecabezas de 25 piezas", "Disfraces", "Libros infantiles"]
//catalogoDeProductos.push("Juegos de encastre")
//console.log(catalogoDeProductos)

//ARRAY PARA CARRITO
const catalogoDeProductos = [{
        id: 1,
        categoria: 'Tren de madera',
        opcion1: 'verde',
        opcion2: 'rojo',
        opcion3: 'azul',
    },
    {
        id: 2,
        categoria: 'Rompecabezas',
        opcion1: '5 piezas',
        opcion2: '10 piezas',
        opcion3: '25 piezas',
    },
    {
        id: 3,
        categoria: 'Disfraces',
        opcion1: 'hombre araña',
        opcion2: 'princesa',
        opcion3: 'hulk',
    },
    {
        id: 4,
        categoria: 'Cuentos Infantiles',
        opcion1: 'Perdido y encontrado de Oliver Jeffers',
        opcion2: 'Atrapado de Oliver Jeffers',
        opcion3: 'El zoo de Joaquin de Pablo Bernasconi',
    },
    {
        id: 5,
        categoria: 'Juegos de encastre',
        opcion1: 'tematica espacio',
        opcion2: 'tematica figuras geometricas',
        opcion3: 'tematica animales de la granja',

    }
]

//ARRAY DE CARRITO
const carrito = []

//FUNCIONES CREADORAS Y BUSCADORAS

function productoFinal (id, categoria, opcion) {
 globalThis.id= id,
 globalThis.categoria=categoria,
 globalThis.opcion=opcion
     
}
function findProduct(id) {
    return catalogoDeProductos.find((resp) => resp.id == id)
}
function createProduct(id, categoria, opcion) {
    carrito.push(new productoFinal(id, categoria, opcion))
}
//INTERACCION CON EL USUARIO 
//let seleccionDeTipoDeProducto = false 

//while (seleccionDeTipoDeProducto == false) {
let seleccion = parseInt(prompt("¿Que producto desea elegir?: \n 1. Tren de madera \n 2. Rompecabezas \n 3. Disfraces \n 4. Cuentos Infantiles \n 5. Juegos de encastre"))
let producto;
if (seleccion == 1) {
    producto = findProduct(1)
    console.log(producto)
    let selectOption = parseInt(prompt(`Ha seleccionado ${producto.categoria} \n
    ¿Que color desea seleccionar?\n
    1. ${producto.opcion1}\n
    2. ${producto.opcion2}\n
    3. ${producto.opcion3}\n `)) 

    if (selectOption === 1) {
        createProduct(producto.categoria, producto.opcion1)
    } else if (selectOption === 2) {
        createProduct(producto.categoria, producto.opcion2)
    } else if (selectOption === 3) {
        createProduct(producto.categoria, producto.opcion3)
    } else {
        alert("Opcion no valida, ha salido del proceso de compra")
    }
} else if (seleccion === 2) {
    producto = findProduct(2)
    console.log(producto)
    let selectOption = parseInt(prompt(`Ha seleccionado ${producto.categoria} \n
    ¿Que cantidad de piezas desea seleccionar?\n
    1. ${producto.opcion1} \n
    2. ${producto.opcion2} \n
    3. ${producto.opcion3} \n`))
    if (selectOption === 1) {
        createProduct(producto.id , producto.categoria, producto.opcion1)
    } else if (selectOption === 2) {
        createProduct(producto.id ,producto.categoria, producto.opcion2)
    } else if (selectOption === 3) {
        createProduct(producto.id ,producto.categoria, producto.opcion3)
    } else {
        alert("Opcion no valida, ha salido del proceso de compra")
    }
} else if (seleccion === 3) {
    producto = findProduct(3)
    console.log(producto)
    let selectOption = parseInt(prompt(`Ha seleccionado ${producto.categoria} \n
    ¿Que disfraz desea seleccionar?\n
    1. ${producto.opcion1} \n
    2. ${producto.opcion2} \n
    3. ${producto.opcion3} \n`))
    if (selectOption === 1) {
        createProduct(producto.id ,producto.categoria, producto.opcion1)
    } else if (selectOption === 2) {
        createProduct(producto.id ,producto.categoria, producto.opcion2)
    } else if (selectOption === 3) {
        createProduct(producto.id ,producto.categoria, producto.opcion3)
    } else {
        alert("Opcion no valida, ha salido del proceso de compra")
    }
} else if (seleccion === 4) {
    producto = findProduct(4)
    console.log(producto)
    let selectOption = parseInt(prompt(`Ha seleccionado ${producto.categoria} \n
    ¿Que título desea seleccionar?\n
    1. ${producto.opcion1} \n
    2. ${producto.opcion2} \n
    3. ${producto.opcion3} \n`))
    if (selectOption === 1) {
        createProduct(producto.id ,producto.categoria, producto.opcion1)
    } else if (selectOption === 2) {
        createProduct(producto.id ,producto.categoria, producto.opcion2)
    } else if (selectOption === 3) {
        createProduct(producto.id ,producto.categoria, producto.opcion3)
    } else {
        alert("Opcion no valida, ha salido del proceso de compra")
    } 
} else if (seleccion === 5) {
    producto = findProduct(5)
    console.log(producto)
    let selectOption = parseInt(prompt(`Ha seleccionado ${producto.categoria} \n
    ¿Que temática desea seleccionar?\n
    1. ${producto.opcion1} \n
    2. ${producto.opcion2} \n
    3. ${producto.opcion3} \n`))
    if (selectOption === 1) {
        createProduct(producto.id ,producto.categoria, producto.opcion1)
    } else if (selectOption === 2) {
        createProduct(producto.id ,producto.categoria, producto.opcion2)
    } else if (selectOption === 3) {
        createProduct(producto.id ,producto.categoria, producto.opcion3)
    } else {
        alert("Opcion no valida, ha salido del proceso de compra")
    } 
}
for (const product of carrito) {
    console.log(product)
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
console.dir(document)

//INGRESO DE NOMBRE 

/* const nombreIngreso = document.getElementById("full-name2")
const botonOK = document.getElementById ("btnIndex")
const h2 = document.getElementById("parrafoBienvenida")
h2.className = "parrafoBienvenida2"

botonOK.addEventListener("click", () => {
   
      h2.innerText =`TE DAMOS LA BIENVENIDA ${nombreIngreso.value} A MIRE TIENDA DE NIÑOS/AS - 3 Y 6 CUOTAS SIN INTERES `;
      
}) */