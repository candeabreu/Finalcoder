const productosMireTienda = [{
        id: 1,
        nombre: "Autos de madera",
        precio: 500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSon061voSN0if2VAuYgClmulvG1A4Ar_TOw&usqp=CAU",
        info: "Disponible en 3 colores"
    },
    {
        id: 2,
        nombre: "Disfraces",
        precio: 750,
        img: "https://i.pinimg.com/564x/38/1c/c2/381cc2e7db3a135074ed4f7ead6522e8.jpg",
        info: "Disponible en 3 modelos"
    }, {
        id: 3,
        nombre: "Juegos de encastre",
        precio: 1200,
        img: "https://www.juguetopolis.com.ar/img/productos/5d3877bedb982.jpg",
        info: "Disponible en 3 tematicas"
    }, {
        id: 4,
        nombre: "Libros infantiles",
        precio: 850,
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/172/732/products/whatsapp-image-2020-09-10-at-15-29-091-df27854298912efa8f15997643138258-640-0.jpeg",
        info: "Oliver Jeffers-Pablo Bernasconi-Graciela Montes"
    }, {
        id: 5,
        nombre: "Rompecabezas",
        precio: 1100,
        img: "https://http2.mlstatic.com/D_NQ_NP_721504-MLA41178149661_032020-O.jpg",
        info: "Cantidad de piezas: 4, 6 y 10"
    },

]

const carrito = []
const contenedorCarrito = document.getElementById("contenedorCarrito")

const enterCart = (r) => {

    carrito.push(productosMireTienda.find((p) => p.id == r))
    console.log(carrito)
}

let html = productosMireTienda.map((productos) => {
    return (

        `<div class="container text-center gridCarrito" id="contenedorCarrito">
        <div class="container text-center gridCarrito">
    <div class="row">
    <div class="col columnaCarrito">
    <div class="card" style="width: 18rem;" id="autoCarrito">
        <img src= ${productos.img} alt="auto" class="card-img-top imgAuto">
        <div class="card-body">
            <h5 class="card-title columnaCarrito">${productos.nombre}</h5>
            <p class="card-text subtitulo">${productos.info}</p>
            <button type="button" onClick= "enterCart(${productos.id})"class="btn btn-light btnCarrito" id="btnCarrito">Agregar al
                carrito</button>
        </div>
    </div>
        </div>
        </div>
        </div>
        </div>`
    )
})

contenedorCarrito.innerHTML = html
console.log(carrito)

