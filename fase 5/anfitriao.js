/*
O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos,
 tanto nos plurais quanto na quantidade de visitas.
Visitas: 1
Você já nos visitou uma vez.
…
Visitas: 2
Você já nos visitou duas vezes.
…
Visitas: 3
Você já nos visitou 3 vezes.

*/

const ler = require("prompt-sync")();

console.log("==Bem vindo==");
console.log("[Digite abaixo se essa é sia 1, 2, ou 3 visita!]")
ingresso = ler("Visitas:")

switch(ingresso){
    case "1":
         console.log("Você já nos visitou uma vez.");
    break;
    case "2":
        console.log("Você já nos visitou duas vezes.");
    break;
    case "3":
        console.log("Você já nos visitou três vezes.");
    break;    
}

console.log("Volte sempre!")