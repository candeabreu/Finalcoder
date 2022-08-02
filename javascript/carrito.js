const productosMireTienda = [{
        id: 1,
        nombre: "Autos de madera",
        precio: 500,
        img: "css/imagenes/autos.jpg",
        info: "Madera laqueada"
    },
    {
        id: 2,
        nombre: "Disfraz capa y antifaz",
        precio: 750,
        img: "css/imagenes/disfraz.png",
        info: "talles disponibles"
    }, {
        id: 3,
        nombre: "Juego de encastre ",
        precio: 1200,
        img: "css/imagenes/encastre.jpg",
        info: "tuercas de colores"
    }, {
        id: 4,
        nombre: "Libro: Miedoso",
        precio: 850,
        img: "css/imagenes/libromiedoso.jpg",
        info: "Autor:Pablo Bernasconi"
    }, {
        id: 5,
        nombre: "Libro: Orejas de mariposa",
        precio: 1100,
        img: "css/imagenes/libromariposas.jfif",
        info: "Autora: Luisa Aguilar"
    },
    {
        id: 6,
        nombre: "Libro: Hipo no nada",
        precio: 1100,
        img: "css/imagenes/librohipononada.jfif",
        info: "Autor: Pablo Bernasconi"
    },
    {
        id: 7,
        nombre: "Libro: Como atrapar una estrella",
        precio: 1100,
        img: "css/imagenes/librocomoatraparestrella.jpg",
        info: "Autor: Oliver Jeffers"
    },
     {
        id: 8,
        nombre: "Libro: Burundí",
        precio: 1100,
        img: "css/imagenes/libropabloburundi2.png",
        info: "Autor: Pablo Bernasconi"
    } ,
    {
       id: 9,
       nombre: "Libro: El zoo de Joaquin",
       precio: 600,
       img: "css/imagenes/librozoodejoa.png",
       info: "Autor: Pablo Bernasconi"
   }, 
   {
    id: 10,
    nombre: "Bloques para construir",
    precio: 5000,
    img: "css/imagenes/construccion.jpg",
    info: "30 piezas imantadas de colores"
},{
    id: 11,
    nombre: "Camara fotografica",
    precio: 2000,
    img: "css/imagenes/camarafotografica.jpg",
    info: "material: madera"
},{
    id: 12,
    nombre: "Muñecos de apego",
    precio: 2000,
    img: "css/imagenes/muñecosdeapego.jpg",
    info: "25 bloques de colores"
},{
    id: 13,
    nombre: "Set de juguetes mixtos",
    precio: 2700,
    img: "css/imagenes/setmaternal.png",
    info: "de 1 a 3 años"
},{
    id: 14,
    nombre: "Set cocina",
    precio: 1700,
    img: "css/imagenes/setcocina.png",
    info: "material: plastico"
},
{
    id: 15,
    nombre: "Disfraz princesa ",
    precio: 2700,
    img: "css/imagenes/disfrazprincesa.png",
    info: "color rosa - talles disponibles"
},

]

let carrito = []
let contenedorCarrito = document.getElementById("contenedorCarrito"),
mensajeCarrito2 = document.getElementById ("mensajeCarrito"),
productosAgregados = document.getElementById ("productosAgregados")

let enterCart = (r) => {

    carrito.push(productosMireTienda.find((p) => p.id == r))
    console.log (carrito)

    mensajeCarrito2 = Toastify({
        text:  "Agregaste productos al carrito" ,
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


 let eliminarCart = (id) => {

    carrito = carrito.filter((p) => p.id != id)
    console.log(carrito)
}
 

let html = productosMireTienda.map((productos) => {
    return (

        `
    <div class="card gridCarrito col-4" style="width: 18rem;">
        <img src=${productos.img} class="card-img-top imagenesCarrito" alt="imagenes" id: "imagenesdelCarrito">
        <div class="card-body contenedor">
          <h5 class="card-title"> ${productos.nombre}</h5>
          <p class="card-text">${productos.info}</p>
          <button type="button" onClick= "enterCart(${productos.id})"class="btn btn-light btnCarrito" id="btnCarrito">Agregar al
                carrito</button>
                <button type="button" onClick= "eliminarCart(${productos.id})"class="btn btn-light btnEliminar" id="btnCarrito">Eliminar del carrito</button>
            
        </div>
      </div>`
    )
})

contenedorCarrito.innerHTML = html

console.log(carrito)

