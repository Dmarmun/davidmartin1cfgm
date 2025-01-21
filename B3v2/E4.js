function concatenarNombreApellido(){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var nombreCompleto=nombre+""+apellido;
    document.getElementById("nombreCompleto").value=nombreCompleto;
}