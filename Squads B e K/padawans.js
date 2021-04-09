/*------OPA OPA, e agora começaremos o nosso grande desafio de História contemporânea do século
      Teste seus conhecimentos
      Se esforce e não deixe-se levar pelo lado negro da força, jovem padawan;
      Teremos 3 perguntas de conteúdos diversos e cada uma diferente da outra.
      Para cada resposta correta, você receberá 10 pontos.
      Para alcançar o 3° lugar tem que ter o mínimo de 10 pontos, o 2° lugar o mínimo de 20 pontos e finalmente o 1° acertando todos as perguntas.
      O 3° lugar vai ganhar uma barra de chocolate!
      O 2° lugar vai levar uma caixa de bombom!
      E o 1° lugar vai ganhar um Fardo de Budwaiser!
      Partiu!!!!!!!!!!!!!!!!!!*/

      const ler = require("prompt-sync")();

console.log("==OPA OPA, e agora começaremos o nosso grande desafio de História contemporânea do século!=");
console.log("[Teste seus conhecimentos]");
console.log("Se esforce e não deixe-se levar pelo lado negro da força, jovem padawan");
console.log("Teremos 3 perguntas.");
console.log("Para cada resposta correta, você receberá 10 pontos.");

//entradas 
var pergunta1 = ler("Qual o jedi que fala ao contrario? ");
var pergunta2 = ler("Onde anakin nasceu? ");
var pergunta3 = ler("Quem é filho do Darth vaider? ");



//processamento
var r1;
var r2;
var r3;
 
if (pergunta1 == "yoda") r1 = 10;
      else 
      r1 = 0;
if (pergunta2 == "tatooine") r2 = 10;
      else
      r2 = 0;
if (pergunta3 == "look") r3 = 10;
      else
      r3 = 0;

var resultado;

resultado = r1 + r2 + r3;
// saidas    //

console.log("[Resultado premios]");
console.log("PARABENS!!!");

if (resultado == 10)
console.log("Você ficou em 3° lugar!\nGanhou uma barra de chocolate!");
if (resultado == 20)
console.log("Você ficou em 2° lugar!\nGanhou uma caixa de bombom!");
if (resultado == 30)
console.log(" Você ficou em 1° lugar!\nGanhou um Fardo de Budwaiser!");
if (resultado == 0)
console.log("0 pontos! Não ganhou nada! ");

console.log("Obrigado por participar!");




