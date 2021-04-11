/*
No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo 
já pode exercer sua cidadania nas urnas. 
== Eleições 2020 ==
  Digite sua idade: 17
  Você já pode votar? True

*/

const ler = require("prompt-sync")();

console.log("== Eleições 2020 ==");

idade = ler("Digite sua idade:");

if(idade >= 16)
console.log("Você já pode votar?", true);
else 
console.log("Você já pode votar?", false);

