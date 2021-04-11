const prompt = require("prompt-sync")();

//entrada 
const celsius = prompt("Digite os graus Celsius: ");

//processamento 
let fahr = celsius * 1.8 + 32;

//saida
console.log("Fahrenheit: ", fahr);

//outra leitura de programa
const c2 = prompt("Digite outro valor: ");

fahr = c2 * 1.8 + 32;
console.log("outro fahr: ", fahr);
