// O teatro do monstro permite a entrada de até 5 pessoas;
// A peça só começa após atingir a lotação máxima;
// Nesta peça é proibida a entrada de menores de 16 anos;
// O gerente quer saber quantos são homens e quantos são mulheres antes da peça começar.

const ler = require("prompt-sync")();

idade = 0
pessoas = 0
homens = 0 
mulheres = 0

console.log("Bem vindo ao teatro do monstro eu serei seu guia")
while (pessoas < 5){
    var idade = ler("Qual sua idade? ");
    if (idade < 16){
        console.log('Não é permitida a entrada!');
    }
    else { 
        pessoas = pessoas + 1
        var sexo = ler("Qual seu sexo? M ou F?");
        if (sexo == "M"){
            homens = homens + 1
        }

        else if (sexo == "F"){
            mulheres = mulheres + 1
        }

    }



}

console.log('Numero de pessoas: ', pessoas, 'sendo Homens', homens, 'e ', mulheres, 'mulheres');

