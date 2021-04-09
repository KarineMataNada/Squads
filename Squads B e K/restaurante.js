// Crie uma função que sera o cardapio de um restaurante online, no cardapio constara a refeição e o o preço da mesma
// As refeiçoes do restaurante pé de fava é atualizada dia a dia, então crie uma função (function) modulavel que pode ser colocado o preço e a comida

//--------------------------------------------
function cardapio (nome, valor){
    console.log("Prato do dia: ", nome, "preço: ", valor)
}

const ler = require("prompt-sync")();

//cardapio do pé de fava
console.log("=== Bem vindo ao restaurante Pé de Fava ===")
var comida = ler("Refeição do dia: ")
var preço =ler ("preço da refeição: ")

cardapio(comida,preço)
console.log("Bom apetite :9")