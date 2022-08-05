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

const btnFinalizarCompra = document.getElementById("confirmarCompra")
const areaMensaje = document.getElementById ("areaNotificacion")

btnFinalizarCompra.addEventListener('click' , ()=> {
  
}
)