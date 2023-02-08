async function fetchProductos() {
    const respuesta = await fetch('../data.json')
    return await respuesta.json()
}

const sectionProductos = document.getElementById ("contenedorCarrito")

function mostrarCatalogo() {
    for (producto of catalogo) {
        const {
            id,
            nombre,
            precio,
            img,
            info
        } = producto
        const html3 =  `
        <div class="card gridCarrito col-4" style="width: 18rem;">
            <img src=${img} class="card-img-top imagenesCarrito" alt="imagenes" id: "imagenesdelCarrito">
            <div class="card-body contenedor">
              <h5 class="card-title"> ${nombre}</h5>
              <p class="card-text">${info} <br> $${precio}</p>
              <button type="button" onClick= "sumarAlCarrito(${id})"class="btn btn-light btnCarrito" id="btnCarrito">Agregar al
                    carrito</button>
            </div>
          </div>
          `
        sectionProductos.innerHTML += html3
    }
}

let catalogo = []
fetchProductos().then(productos => {
    catalogo = productos
    mostrarCatalogo()
})

const carrito = JSON.parse(localStorage.getItem('carrito')) || []

function sumarAlCarrito(id) {
    const cantidadCarrito = document.getElementById("numeroCarrito");
    cantidadCarrito.innerText = carrito.length
    const producto = catalogo.find(producto => producto.id == id)

    if (carrito.find(producto => producto.id == id)) {
        const producto = carrito.find(producto => producto.id == id)
        producto.cantidad++
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        })
    }
    console.log(carrito)
    mostrarNotificacion(`${producto.nombre} fue agregado al carrito`)
    guardarEnElCarrito()
}

function mostrarNotificacion(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        destination: './carrito.html',
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #EB1D36 , #EB1D36)",
        },
        onClick: function () {}
    }).showToast();

}

function guardarEnElCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}