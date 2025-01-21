function mostrarDeportes(){
    const deportes=document.getElementsByName("deporte");
    let mensaje="Deportes seleccionados: ";
    for (let i=0;i<deportes.length;i++) {
        if (deportes[i].checked) {
            mensaje+=deportes[i].value +" ";
        }
    }
    alert(mensaje);
}