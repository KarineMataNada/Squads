//Crie um jogo em que voc~e vai ter que escolher entre 3 armas para enfrentar um dragão
//Uma espada, uma faca e um sapato. Só uma dessas opções que vai garantiar a vitoria contra o dragão
//Antes de começar o jogo, o mesmo vai pedir o nome do heroi, acrecente o nome do heroi nos textos do jogo


const ler = require("prompt-sync")();
console.log("Bem vindo a Manhanha-airlines eu serei o seu guinha, no dia de hoje temos 3 promoçôes de viagem");




console.log("===Por favor, selecione um dos seguintes destinos===");
console.log(" (1) Casa da grande familia");
console.log(" (2) Wakanda");
console.log(" (3) Frio de Janeiro");

var nro = ler("Digite seu destino aqui: ");


switch (nro) {
    case "Casa da grande familia":
        msg= "Você vai visitar o Algustinho e o Linelzinho, parabens! tenha uma boa viagem! :wave:≧◉ᴥ◉≦";

        break;
    case "Wakanda":
        msg = "Você vai para a cidade mais avançada do continente africano, de um alo pro rei para mim! :wave:≧◉ᴥ◉≦ ";


        break;
    case "Frio de Janeiro":
        msg = "Você vai surfar no gelo? okay tenha uma boa viagem e leve um agasalho :wave:≧◉ᴥ◉≦";

      break;
    default:
        msg = "Você não escolheu nenhum dos 3 destinos, você não vai viajar pq você não é legal :sob: ) ";
}
console.log (msg)