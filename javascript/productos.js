async function fetchProductos () {
    const respuesta = await fetch('../data.json')
    return await respuesta.json ()
}

const sectionProductos = document.getElementById ("contenedorCarrito")

function mostrarCatalogo () {
    for (producto of catalogo) {
        const {id, nombre, precio, img, info} = producto
        const html3 =  `
        <div class="card gridCarrito col-4" style="width: 18rem;">
            <img src=${img} class="card-img-top imagenesCarrito" alt="imagenes" id: "imagenesdelCarrito">
            <div class="card-body contenedor">
              <h5 class="card-title"> ${nombre}</h5>
              <p class="card-text">${info} <br> $${precio}</p>
              <button type="button" onClick= "sumarAlCarrito(${id})"class="btn btn-light btnCarrito" id="btnCarrito">Agregar al
                    carrito</button>
                
            </div>
          </div>`
          sectionProductos.innerHTML += html3
          
    }
}

let catalogo = []
 fetchProductos().then(productos => {
    catalogo = productos
    mostrarCatalogo ()
 })

let carrito = JSON.parse (localStorage.getItem('carrito')) || []

function sumarAlCarrito (id) {
const producto = catalogo.find (p=> p.id == id) 
carrito.push(producto)
console.log (carrito)
mostrarNotificacion ()
guardarEnElCarrio ()
}

function mostrarNotificacion () {
    Toastify({
        text: "Agregaste un producto al carrito",
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
        onClick: function () {} // Callback after click
    }).showToast();

}
function guardarEnElCarrio () {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
