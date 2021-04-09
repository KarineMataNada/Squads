//Crie um jogo em que voc~e vai ter que escolher entre 3 armas para enfrentar um dragão
//Uma espada, uma faca e um sapato. Só uma dessas opções que vai garantiar a vitoria contra o dragão
//Antes de começar o jogo, o mesmo vai pedir o nome do heroi, acrecente o nome do heroi nos textos do jogo


const ler = require("prompt-sync")();
const prompt = require("prompt-sync")();
var X = prompt("Qual o seu nome, heroi? ");
console.log("bravo Heroi "+ X +", o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar");
console.log("─────▄████▀█▄");
console.log("───▄█████████████████▄");
console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼");
console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲");
console.log("████████████████████▀▀");


//entrada
var nro = ler ("Escolha uma das seguintes armas: Sapato Ub, Espada ==(======>, (3) Faca =]==>");

switch (nro) {
    case "Faca":
        msg= "Você "+ X + " tenta atacar o  Dragão com sua faca, porem ela não consegue ferir o dragão, o  dragão pisa em cima de você e você perde\n";
        break;
    case "Sapato":
        msg = "você escolheu um sapato como arma, você fez uma escolha horrivel, você perdeu e a humanidade foi subjulgada pelo dragão";
        break;
    case "Espada":
        msg = "Você escolheu a espada lendaria, O dragão treme perante seu poder e foje, a humanidade foi salva!";
      break;
    default:
        msg = "Você não escolheu nenhuma das opções ";
}

console.log (msg)