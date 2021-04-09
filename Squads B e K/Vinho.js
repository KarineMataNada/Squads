/*
Novo Jogo! Será que o Dr caveirão vai deixar vc entrar? O lance é o seguinte, uma pergunta e dois caminhos, 
apenas um vai abrir as portas para você entrar. 
*/
const ler = require("prompt-sync")();


var2 = 0

console.log("░░░░░▄▄▄░░▄██▄░░░")
console.log("░░░░░▐▀█▀▌░░░░▀█▄░░░")
console.log("░░░░░▐█▄█▌░░░░░░▀█▄░░")
console.log("░░░░░░▀▄▀░░░▄▄▄▄▄▀▀░░")
console.log("░░░░▄▄▄██▀▀▀▀░░░░░░░")
console.log("░░░█▀▄▄▄█░▀▀░░")
console.log("░░░▌░▄▄▄▐▌▀▀▀░░ ")
console.log("▄░▐░░░▄▄░█░▀▀ ░░")
console.log("▀█▌░░░▄░▀█▀░▀ ░░ ")

console.log("Bem vindo A casa do Doutor Esqueleto, você como convidado troue um presente para ele ")
var var2 = ler("Qual o seu presente? Leite ou vinho?");

if (var2 == "Leite")
    console.log('O Doutor Esqueleto, por ser um esqueleto adora leite e calcio, ele ficou grato pelo presente e deixou você entrar');
else if (var2 == "Vinho")
    console.log(' Ele não curtiu o seu presente, fechou a porta na sua cara e você estragou o encontro, parabens!');
