function mostrarPrecio(){
    var pizza=document.getElementById("pizzas");
    var precio=document.getElementById("precio");
    var precioSeleccionado;
    switch (select.value){
        case "jamonQueso":
            precioSeleccionado = "10€";
            break;
        case "mozzarella":
            precioSeleccionado = "11€";
            break;
        case "morrones":
            precioSeleccionado = "12€";
            break;
        default:
            precioSeleccionado = "";
    }
    precio.value = precioSeleccionado;
}