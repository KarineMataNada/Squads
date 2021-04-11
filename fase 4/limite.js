/*
O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar 
dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança
 irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
*/
const ler = require("prompt-sync")();
const limite = 5;


var total = ler("Digite quantas pessoas ja estão na loja? ");

var autorizado = total < limite;

 

console.log("Autorizado a entrar na loja?", autorizado);


if (autorizado) console.log("Pode deixar o cliente entrar!");

var espera = !autorizado;

 if (espera) console.log("Cliente precisa esperar!");

 

 var mensagem = "Esperar um pouco!";

 if (autorizado) mensagem = "Pode entrar!";
 console.log(mensagem);

