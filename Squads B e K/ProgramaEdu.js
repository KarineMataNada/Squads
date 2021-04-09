/*
Acertou ganhou! Acerte 1 pergunta 30 pontos
acerte 2 perguntas 60 pontos
acerte 3 perguntas 90 pontos.
premios:
30 = paçoca
60 = 1litao 
90 = 1ps5 
va subindo de nivel ate chegar no grande premio.
*/

const ler = require("prompt-sync")();

console.log("==ACERTOU GANHOU!=");
console.log("[Digite a resposta certa sem letras maiusculas]");

//entradas 
var pergunta1 = ler("Qual a cor do ceú? ");
var pergunta2 = ler("O covid acabou? ");
var pergunta3 = ler("Com quantos % a Karol conka saiu do bbb? ");



//processamento
var r1;
var r2;
var r3;
 
if (pergunta1 == "azul") r1 = 30;
      else 
      r1 = 0;
if (pergunta2 == "nao") r2 = 30;
      else
      r2 = 0;
if (pergunta3 == "99%") r3 = 30;
      else
      r3 = 0;

var resultado;

resultado = r1 + r2 + r3;
// saidas    //

console.log("[Resultado premios]");
console.log("PARABENS!!!");

if (resultado == 30)
console.log("30 pontos! Você ganhou uma paçoca!");
if (resultado == 60)
console.log("60 pontos! Você ganhou um litrao!");
if (resultado == 90)
console.log("90 pontos! Você ganhou um ps5!");
if (resultado == 0)
console.log("0 pontos! Não ganhou nada! ");

console.log("Obrigado por participar!");





