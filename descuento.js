document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("descuentoForm").addEventListener("submit", function(event) {
    event.preventDefault();


    var ticketQuantity = parseInt(document.getElementById("cantidad").value);
    var discountType = parseInt(document.getElementById("categoria").value);
    var originalPrice = 200;

    var discountAmount = originalPrice * (discountType / 100);
    var totalPrice = originalPrice - discountAmount;
    var finalPrice = totalPrice * ticketQuantity;


    document.getElementById("precioFinal").textContent = "Total a pagar: $" + finalPrice.toFixed(2);

    return false; 
  });
  document.getElementById("resetButton").addEventListener("click", function(event) {
    event.preventDefault();
  
    // Reset form to default values
    document.getElementById("descuentoForm").reset();
    document.getElementById("precioFinal").textContent = "Total a pagar: $";
    });
});




