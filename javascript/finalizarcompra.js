new Cleave('#tarjeta', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
    }
}); 

new Cleave('#vencimiento', {
    date: true,
    datePattern: ['m', 'y'],
    delimiter: '/',
});

new Cleave('#codigo', {
    numericOnly:true,
    blocks: [3]
});

const btnFinalizarCompra = document.getElementById("confirmarCompra"),
 areaMensaje = document.getElementById ("areaNotificacion"),
 imputNombrecompleto = document.getElementById ("nombre"),
 imputEmailcompra = document.getElementById ("email"),
 imputNroTarjeta = document.getElementById ("tarjeta"),
 imputVencimiento = document.getElementById ("vencimiento"),
 imputCodigo = document.getElementById ("codigo")


btnFinalizarCompra.addEventListener('click' , ()=> {

    if (imputNombrecompleto.value == "" || imputEmailcompra.value == "" || 
    imputNroTarjeta.value == "" || imputVencimiento.value == "" || imputCodigo.value == "" ) {

        Toastify({
            text: "Completar campos requeridos",
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

    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada con exito',
        showConfirmButton: false,
        timer: 3000
      })
     localStorage.removeItem('carrito')
     setTimeout (()=>{
      window.location.href = "./index.html"

     }, 3500)
}}
)



