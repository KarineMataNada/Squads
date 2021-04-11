//A catraca do onibus quebrou e a empresa precisa dos dados da viagem.
//Os dados necessários para a empresa são quando a pessoa entra no onibus são as seguintes:
//Quantas pessoas ja entraram no onibus até o momento; 
//Se a pessoa é pagante ou entra com gratuidade;
//O total dos ganho até o momento (Considerando a passagem a R$ 4,40).

const ler = require("prompt-sync")();

var quanti = ler("Quantas pessoas estão no Onibus?");
var pass =  ler("Qual o dinheiro da passagem?"); 
var cash = ler("quantas pessoas no onibus que pagaram a passagem?"); 

var free = quanti - cash;
var totalcash = (cash * pass);

console.log("Presentes no onibus: ", quanti);
console.log("pagantes: ", cash, " quantidade de não pagantes:  ", free)
console.log("total de dinheiro: ", totalcash);

