/* 
/*  Os "vendedores comissionados" recebem 5% do valor de cada produto
vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um
adicional de 9% sobre o excedente. Seu programa irá receber o valor total
de vendas e emitir o recibo de comissão.
Vendas totais: 5230.66
Sua comissão: 261.53
Valor adicional: 20.76  */ /*  Os "vendedores comissionados" recebem 5% do valor de cada produto
vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um
adicional de 9% sobre o excedente. Seu programa irá receber o valor total
de vendas e emitir o recibo de comissão.
Vendas totais: 5230.66
Sua comissão: 261.53
Valor adicional: 20.76  */ 



const ler = require("prompt-sync")();


console.log("==Comissões==");

//entradas
var vendas = ler("Digite o valor de vendas do mês: ");


//processamento
const Meta = 5000.0;
let comissao = vendas * 0.05;
let adicional = 0.0;

if (vendas > Meta)
{
    adicional = (vendas - Meta) * 0.09;
}

//saidas
console.log("Sua comissão: ", comissao);
console.log("Valor adicional: ", adicional)