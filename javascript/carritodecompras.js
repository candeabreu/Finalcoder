const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const sectionCarrito = document.getElementById("productosAgregados")

function mostrarCarrito() {
    sectionCarrito.innerHTML = "";
    if (carrito.length == 0) {
        sectionCarrito.innerHTML = `
<div style="text-aling:center">
<p class="textoCarritoVacio">No tienes productos agregados al carrito</p>
</div> <div class="botonVolver"> 
<a href="carritocompras.html"><button type="button" class = "btnVolver">Volver a productos</button></a></div>`

} else {
    for (const producto of carrito) {
        const {id, nombre, precio, img, info, cantidad} = producto   
        const productohtml = `
        <div class="card gridCarrito col-4" style="width: 18rem;">
            <img src=${img} class="card-img-top imagenesCarrito" alt="imagenes" id= "imagenesdelCarrito">
            <div class="card-body contenedor">
              <h5 class="card-title"> ${nombre}</h5>
              <p class="card-text">${info} <br> $${precio} <br> Cantidad: ${cantidad}</p>
              <button type="button" onClick= "eliminarDelCarrito(${id})"class="btn btn-light btnCarrito" id="btnCarrito">Eliminar del
                    carrito</button>
            </div>
          </div>`
      sectionCarrito.innerHTML+=productohtml
    }
} 
}

mostrarCarrito()

function eliminarDelCarrito (id) {
  const producto = carrito.find (producto => producto.id == id) 
    if (producto.cantidad === 1){

      carrito.splice(carrito.findIndex (producto => producto.id === id),1)
    } else {
      producto.cantidad--
    }

    mostrarCarrito()
  resumenDePago()
    guardarEnElCarrito ()
    notificacionEliminar (`${producto.nombre} fue eliminado del carrito` )
  }

  function guardarEnElCarrito () {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }
    
function notificacionEliminar (mensaje) {
  Toastify({
    text: mensaje,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
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


const resumen = document.getElementById ("seccionResumenDePago")  

function resumenDePago () {
 resumen.innerHTML=""
 const total = calcularTotal()
 const resumenHtml = `<div class="cajaResumen"><h3 class="tituloResumen">Resumen:</h3>
 <br><p class="textoResumen">Total: $${total}</p>
 </div>
 <div class="cajaBotonComprar"><br><button type="button" class="btnComprar">Comprar</button></div>
 `
 resumen.innerHTML+= resumenHtml

}

resumenDePago ()

function calcularTotal () {
  let total = 0
    for (producto of carrito) {
        total += producto.precio * producto.cantidad
    }
    return total
}


