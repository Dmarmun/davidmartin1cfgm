function valores(cadena1) {
    for (let c1=0;c1<cadena1.length;c1++) {
        let valor=prompt("Ingrese un valor:");
        cadena1[c1]=parseInt(valor);
    }
}
function suma(cadena2) {
    let suma=0;
    for (let c2=0;c2<cadena2.length;c2++) {
        suma=suma+cadena2[c2];
    }
    return("La suma total es:"+suma+"<br>");
}
function sumaMayores36(cadena3) {
    let suma=0;
    for (let c3=0;c3<cadena3.length;c3++) {
        if (cadena3[c3]>36) {
            suma=suma+cadena3[c3];
        }
    }
    return("La suma de los valores mayores a 36 es:"+suma+"<br>");
}
function númeroMayores50(cadena4) {
    let cantidad=0;
    for (let c4=0;c4<cadena4.length;c4++) {
        if (cadena4[c4]>50) {
            cantidad++;
        }
    }
    return ("El número de valores mayores a 50 es:"+cantidad+"<br>");
}
let cadena=new Array(8);
valores(cadena);
let resultado1=suma(cadena);
let resultado2=sumarMayores36(cadena);
let resultado3=númeroMayores50(cadena);
document.write(resultado1+resultado2+resultado3);