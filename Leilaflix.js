/*Este é um canal de stream de filmes de Horror e Drama.
Apresente uma lista final de filmes e atrelar a relevância
 dela de acordo com as escolhas do usuário durante a interação 
 com a lista de filmes exibidos no canal (exemplo da Netflix, Spotify, Youtube)
Dica: categorize a relevância dos filmes, afunilando a 
preferência do usuário a partir da seleção dos filmes que contém 
tópicos do interesse do usuário.
(Ex: "Titanic (95%): este filme venceu diversos prêmios Oscar".)*/

const ler = require("prompt-sync")();

console.log("==BEM VINDO A LEILAFLIX==");
console.log("[Esse é um canal de filmes de horror e drama]");
console.log("Escolha entre:\n 1-Drama\n 2-Terror")
console.log("[Digite apenas o número do filme.]");

//entradas 

var filme = ler("Digite sua escolha: ");
var msg;

switch (filme) {
    case "1":
        msg = 
        "Todo mundo em panico (95%): este filme se encaixa bem na sua vida!";
        break;
    case "2":
        msg = 
        "A culpa é das estrelas (95%): este filme vai te fazer suar pelos olhos!";
        break;
    default:
        msg = "Você não escolheu nenhuma das opções ";
}
console.log(msg);
console.log("Bom filme!");
 
