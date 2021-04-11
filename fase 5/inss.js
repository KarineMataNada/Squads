/*16. O “mini DP” aumentou seus cálculos. Agora, considere a jornada de
trabalho semanal de um funcionário, que é de 40 horas. O funcionário que
trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da
hora regular com um acréscimo de 50%. Considerando que o mês possui 4
semanas exatas, e que a entrada de horas será um valor maior que a
jornada normal.
a. Salário base (valor da hora * horas normais)
b. Valor de horas extras
c. Valor do desconto para o INSS
d. Salário líquido (Salário base + horas extras – desconto INSS)
e. Imprimir na tela o contracheque do funcionário.*/

const ler = require('prompt-sync')();

var valorHorasExtras  = ler("Digite as horas extras trabalhadas: ");
var valor = ler("valor da hora: ");
var hora;
hora = 160;

var salarioBase = hora * valor;
var valorHorasExtras = hora * (valor * 1.5);
var descontoInss = salarioBase * 0.11;
var salarioLiquido = salarioBase + valorHorasExtras - descontoInss;

console.log("Total a receber: ", salarioLiquido);
var contracheque = ler("Gostaria de ver seu contracheque? ");

switch(contracheque){
    case "sim":

     console.log("Salario base: ", salarioBase);
     console.log("Descontos inss: ", descontoInss);
     console.log("Horas extras: ", valorHorasExtras);
     console.log("Total a receber: ", salarioLiquido);
     break;
    case "nao":
    console.log("Tenha um bom dia!")    
    break; 
}
