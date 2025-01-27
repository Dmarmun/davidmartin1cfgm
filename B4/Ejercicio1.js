function validatePassword() {
    var password = document.getElementById("password").value;
    if (password.length < 7 || password.length > 20) {
        alert("La clave debe tener entre 7 y 20 caracteres.");
    }
}