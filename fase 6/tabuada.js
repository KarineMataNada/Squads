/* 
Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
Tabuada de: 7
7 x 1 = 7
7 x 2 = 14
…

*/

const ler = require("prompt-sync")();

console.log("==TABUADA")
var primeiro = 0;

while (primeiro <= 10)
{
    let numero = ler("Digite um número: ");
    let tabuada =  numero * 1;
    let tabuada1 =  numero * 2;
    let tabuada2 =  numero * 3;
    let tabuada3 =  numero * 4;
    let tabuada4 =  numero * 5;
    let tabuada5 =  numero * 6;
    let tabuada6 =  numero * 7;
    let tabuada7 =  numero * 8;
    let tabuada8 =  numero * 9;
    let tabuada9 =  numero * 10;
    

    console.log("Tabuada:", numero);
    console.log(numero, "x 1: ", tabuada);
    console.log(numero, "x 2: ", tabuada1);
    console.log(numero, "x 3: ", tabuada2);
    console.log(numero, "x 4: ", tabuada3);
    console.log(numero, "x 5: ", tabuada4);
    console.log(numero, "x 6: ", tabuada5);
    console.log(numero, "x 7: ", tabuada6);
    console.log(numero, "x 8: ", tabuada7);
    console.log(numero, "x 9: ", tabuada8);
    console.log(numero, "x 10:",tabuada9);
  
} 
