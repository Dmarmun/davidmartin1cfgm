function mitad(cadena1) {
    for (let c1=0;c1<cadena1.length/2;c1++) {
        medio=c1
    }
    return("Mitad de la frase: "+cadena1.charAt(medio)+"<br>");
}

function ultimoCaracter(cadena2) {
    return("Ultimo carácter: "+cadena2.charAt(cadena2.length-1)+"<br>");
}

function inverso(cadena3) {
    let invertido="";
    for (let c2=0;c2<cadena3.length;c2++) {
        invertido=invertido+(cadena3.charAt(cadena3.length-c2-1));
    }
    return("Invertido: "+invertido+"<br>");
}

function caracteres(cadena4) {
    let guion="";
    for (let c3=0;c3<cadena4.length;c3++) {
        guion=guion+(cadena4.charAt(c3)+'-');
    }
    return("Separados por guión: "+guion+"<br>");
}

function vocales(cadena5) {
    let cantidad=0;
    for (let c4=0;c4<cadena5.length;c4++) {
        if (cadena5.charAt(c4)=="A" || cadena5.charAt(c4)=="E" || cadena5.charAt(c4)=="I" || cadena5.charAt(c4)=="O" || cadena5.charAt(c4)=="U" || cadena5.charAt(c4)=="a" || cadena5.charAt(c4)=="e" || cadena5.charAt(c4)=="i" || cadena5.charAt(c4)=="o" || cadena5.charAt(c4)=="u") {
            cantidad++;
        }
    }
    return("Cantidad de vocales: "+cantidad+"<br>");
}


let cadena=prompt("Ingrese una cadena de caracteres");
document.write("La cadena es: "+cadena+"<br>");
let resultado1=mitad(cadena);
let resultado2=ultimoCaracter(cadena);
let resultado3=inverso(cadena);
let resultado4=caracteres(cadena);
let resultado5=vocales(cadena);
document.write(resultado1,resultado2,resultado3,resultado4,resultado5);