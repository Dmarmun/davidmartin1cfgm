function suma() {
    let numero=0, total=0;
    do {
        numero=parseInt(prompt("Introduzca un valor a sumar, introduce 9999 para calcular."));
        total=numero+total;
    }while (numero!=9999)
    total=total-9999;
    return "El total es: "+total+".";
}
let resultado=suma();
document.write(resultado);