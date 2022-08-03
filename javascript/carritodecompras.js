let carrito = JSON.parse(localStorage.getItem('carrito')) || []
const sectionCarrito = document.getElementById("productosAgregados")

function mostrarCarrito() {
    sectionCarrito.innerHTML = ""
    
    if (carrito == "") {
        sectionCarrito.innerHTML = `
<div style="text-aling:center">
<p class="textoCarritoVacio">No tienes productos agregados al carrito</p>
</div> <div class="botonVolver"> <a href="carritocompras.html"><button type="button" class = "btnVolver">Volver a productos</button></a></div>`
} else {
    for (const producto of carrito) {
        const {id, nombre, precio, img, info} = producto   
        const productohtml = `<div class="card gridCarrito col-4" style="width: 18rem;">
        <img src=${img} class="card-img-top imagenesCarrito" alt="imagenes" id: "imagenesdelCarrito">
        <div class="card-body contenedor carritoNuevo">
          <h5 class="card-title tituloCarritoCard"> ${nombre}</h5>
          <p class="card-text textoCarrito">${info} <br>$${precio}</p> 
                <button type="button" onClick= "eliminarDelCarrito(${id})"class="btn btn-light btnEliminar" id="btnCarrito">Eliminar del carrito</button>
            
        </div>
      </div>`
      sectionCarrito.innerHTML=productohtml
    }
}
}
mostrarCarrito()

function eliminarDelCarrito (id) {
    const producto = carrito.filter((p) => p.id != id)
    console.log (producto)
    guardarEnElCarrio ()

    Toastify({
        text: "Eliminaste un producto",
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