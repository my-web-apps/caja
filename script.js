function nombreCliente(){
   var nombre = prompt("Nombre del cliente");
   $('#nombre').html(nombre);

   $('#mimodal').modal('show');

}

var total = 0;

function addArticulo(){
   precio = prompt("Valor del producto: ");

   intPrecio = parseInt(precio);
   if (isNaN(intPrecio) == false){
      total += intPrecio;

      $('#total').html(total);

      var li = document.createElement("li");
      var texto = document.createTextNode(" $  "+precio);
      li.appendChild(texto);

      var listado = document.getElementById("lista");
      listado.appendChild(li);

   }else {
      alert("Precio Invalido. Intenta de nuevo.");
   }

}

function limpiar(){
   total = 0;
   $('#total').html(total);
   var listado = document.getElementById("lista");
   listado.innerHTML="";
}
