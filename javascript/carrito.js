//ARRAY DE CARRITO VACIO 
const carrito = []

const contenedorCarrito = document.getElementById("contenedorCarrito")

function crearCarritoHtml() {
    let html;
    html = `   
        <div class="container text-center gridCarrito" id="contenedorCarrito">
            <div class="container text-center gridCarrito">
                <div class="row">
                    <div class="col columnaCarrito">
                        <div class="card" style="width: 18rem;" id="autoCarrito">
                            <img src="../proyectofinal/css/imagenes/autos.jpg" alt="auto" class="card-img-top imgAuto">
                            <div class="card-body">
                                <h5 class="card-title columnaCarrito">Autos de madera</h5>
                                <p class="card-text subtitulo">Disponible en 3 colores.</p>
                                <button type="button" class="btn btn-light btnCarrito" id="btnCarrito">Agregar al
                                    carrito</button>
                            </div>
                        </div>
                    </div>
                    <div class="col columnaCarrito">
                        <div class="card" style="width: 18rem;" id="disfrazCarrito">
                            <img src="../proyectofinal/css/imagenes/disfraz.jpg" alt="auto" class="card-img-top imgAuto">
                            <div class="card-body">
                                <h5 class="card-title columnaCarrito">Disfraces</h5>
                                <p class="card-text subtitulo"> Disponible en 3 modelos </p>
                                <button type="button" class="btn btn-light btnCarrito" id="btnCarrito">Agregar al
                                    carrito</button>
                            </div>
                        </div>
                    </div>
                    <div class="col columnaCarrito">
                        <div class="card" style="width: 18rem;" id="encastreCarrito">
                            <img src="../proyectofinal/css/imagenes/encastre.jpg" alt="auto" class="card-img-top imgAuto">
                            <div class="card-body">
                                <h5 class="card-title columnaCarrito">Juegos de encastre</h5>
                                <p class="card-text subtitulo"> Disponible en 3 tematicas </p>
                                <button type="button" class="btn btn-light btnCarrito" id="btnCarrito">Agregar al
                                    carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> </div>`

    contenedorCarrito.innerHTML = html;
}

crearCarritoHtml()

const productoAuto = document.getElementById("autoCarrito"),
    productoDisfraz = document.getElementById("disfrazCarrito"),
    encastreCarrito = document.getElementById("encastreCarrito"),
    btnAgregarCarrito = document.getElementById("btnCarrito")

const productosCarrito = [{
            nombre: productoAuto,
            precio: 500
        },
        {
            nombre: productoDisfraz,
            precio: 1000
        },
        {
            nombre: encastreCarrito,
            precio: 700
        }

    ]

    for (const productos of productosCarrito) {
        console.log (productos)
    }

 function agregarAlCarrito() {
    carrito.push(productosCarrito.nombre)
}