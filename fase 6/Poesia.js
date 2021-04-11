/*
No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela.
 Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.
*/

const ler = require("prompt-sync")();

const LIMITE = 10;
var total = 1;
var cliente;


while (total < LIMITE)
{    
    console.log("Minha energia é o desafio,")
    console.log("Minha motivação é o impossível,")
    console.log("e é por isso que eu preciso")
    console.log("ser, à força e a esmo, inabalável.")

    cliente = ler("Gostaria de apreciar novamente essa poesia? ");
    if (cliente == "sim")
    total++;
    else
    return console.log("Obrigado pela presença!");

}