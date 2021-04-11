/*
O programa “Cara ou coroa” irá funcionar assim: O sistema irá solicitar um número, 
o jogador irá digitar o valor que preferir. O programa então irá exibir uma resposta em texto fixo, 
onde a única variável é o resultado da moeda. Para “jogar a moeda”, considere o número digitado: Sendo par é cara,
 sendo ímpar é coroa.

*/

//repetir empre  que precisar de leitura
const ler = require ("prompt-sync")();
const texto = ler("Jogue a moeda (digite qualquer número): ");

//processamento 
var numero = Number(texto);
var resultado = numero % 2;

//saidas 
console.log("Veja o resultado abaixo: sendo 0 é cara, 1 é coroa:");
console.log("O sorteio deu ", resultado, "!");

