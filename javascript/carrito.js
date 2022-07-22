const productosMireTienda = [{
        id: 1,
        nombre: "Autos de madera",
        precio: 500,
        img: "css/imagenes/autos.jpg",
        info: "Disponible en 3 colores"
    },
    {
        id: 2,
        nombre: "Disfraces",
        precio: 750,
        img: "css/imagenes/disfraz.jpg",
        info: "Disponible en 3 modelos"
    }, {
        id: 3,
        nombre: "Juegos de encastre",
        precio: 1200,
        img: "css/imagenes/encastre.jpg",
        info: "Disponible en 3 tematicas"
    }, {
        id: 4,
        nombre: "Libros infantiles",
        precio: 850,
        img: "css/imagenes/libropablo.png",
        info: "Oliver Jeffers-Pablo Bernasconi-Graciela Montes"
    }, {
        id: 5,
        nombre: "Rompecabezas",
        precio: 1100,
        img: "css/imagenes/rompecabezas2.png",
        info: "Cantidad de piezas: 4, 6 y 10"
    },

]

const carrito = []
const contenedorCarrito = document.getElementById("contenedorCarrito")

const enterCart = (r) => {

    carrito.push(productosMireTienda.find((p) => p.id == r))
    console.log(carrito)
}


const eliminarCart = (r) => {

    carrito.slice(productosMireTienda.find((p) => p.id == r))
    console.log(carrito)
}


let html = productosMireTienda.map((productos) => {
    return (

        `
    <div class="card gridCarrito" style="width: 18rem;">
        <img src=${productos.img} class="card-img-top imagenesCarrito" alt="imagenes" id: "imagenesdelCarrito">
        <div class="card-body contenedor">
          <h5 class="card-title"> ${productos.nombre}</h5>
          <p class="card-text">${productos.info}</p>
          <button type="button" onClick= "enterCart(${productos.id})"class="btn btn-light btnCarrito" id="btnCarrito">Agregar al
                carrito</button>
                <button type="button" onClick= "eliminarCart(${productos.id})"class="btn btn-light btnEliminar" id="btnCarrito">Eliminar del carrito</button>

        </div>
      </div>
      `
    )
})

contenedorCarrito.innerHTML = html
console.log(carrito)