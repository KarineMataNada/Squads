
const ler = require("prompt-sync")();
//entradas 
var mes = ler("Mês do seu nascimento: ");
var dia = ler("Dia do aniversario: ");

//processamento 
//21/01 a 19/02
//entre
var inicio = mes == 1 && dia >= 21;
var fim = mes == 2 && dia <= 19;

var inteligente = inicio || fim;

//saida 
console.log("Você é inteligente? ", inteligente);