let palabra, check=0, intentos=0, compro=0;
    do {
    while (check==0) {
            if (intentos==5) {
                document.write("Ha excendido el número de intentos.");
                check=1;
            }
            else {
                palabra=prompt("Introduce una palabra a traducir entre gato, perro, mesa y casa.");
                intentos++;
                check=fin;
                let resultado=traductor(palabra);
                document.write(resultado);
            }
        }
    }while (check==0)
    function fin() {return "1"}
    function traductor(word) {
    switch (word) {
                case ('gato'):
                    return "Cat";
                    fin;
                    break;
                case ('perro'):
                    return "Dog";
                    fin;
                    break;
                case ('mesa'):
                    return "Table";
                    fin;
                    break;
                case ('casa'):
                    return "House";
                    fin;
                    break;
                default:
                    alert("Debe introducir una palabra a traducir entre gato, perro, lápiz y casa.");
                    return " ";
            }
    }