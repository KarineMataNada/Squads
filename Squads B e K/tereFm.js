
/*
Bem vindo a radio tereFm, a melhor radio de Teresopolis! Vamos sortear 3 bonés exclusivos.
me diga seu nome e responda de forma correta. 
*/
const ler = require("prompt-sync")();

var primeiro = 0;

while (primeiro < 3)
{
    let nome = ler("Digite seu nome: ");
    let resposta = ler("Qual melhor radio da regiao? ");

    if(resposta == "terefm")
    console.log("parabens", nome, "! Você ganhou um boné.");
    else 
    console.log("Não foi dessa vez");
    primeiro++;
} 

console.log("votação encerrada");