function verificarEdad() {
    const mayor18=document.getElementById("mayor18").checked;
    if (mayor18) {
        alert("Puede ingresar al sitio.");
    } else {
        alert("No puede ingresar al sitio.");
    }
}