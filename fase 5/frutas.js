
/*
No blog “Incentivo ao consumo de frutas”,
o aluno digita o nome de sua fruta favorita, 
e receberá alguma informação singular sobre ela.
Para se tornar interessante, a lista deve conter pelo menos 6 curiosidades,
e uma sobre frutas de modo geral.
*/


const ler = require("prompt-sync")();

console.log("==Incentivo ao consumo de frutas==");
var fruta = ler("Qual sua fruta favorita? ");


var mensagem;

switch (fruta){
     case "banana" :
         mensagem = "Você gosta da 2a fruta mais consumida no mundo.";
         break;
     case "maca" : 
         mensagem = "Você escolheu a fruta proibida!";
         break;
     case "morango" :
         mensagem = "A melhor fruta do mundo!";
         break;
     case "manga" :
         mensagem = "Só não pode comer com leite.";
         break;
     case "fruta do conde" : 
         mensagem = "Você escolheu a fruta da releza!";
         break;
     case "goiaba" :
         mensagem = "A melhor fruta da bichinho!";
         break;
         default:
         mensagem = "Parece que essa fruta me deixou sem palavras.";
}  

console.log("Você escolheu ", fruta);
console.log(mensagem);