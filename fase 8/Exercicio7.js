/*O programa “Compromissos” gerencia a sua agenda do mês. Você pode digitar um compromisso,
 informando o dia e a descrição do evento, e consultar se existe algum apontamento para determinado dia.
*/

const prompt = require("prompt-sync")();
console.log('==Sua Agencia do mês ==');

compromissos = [];

compromissos_dia = [];
 
menu_opcao = 1;

while(menu_opcao != 0){
console.log("Digite:\n(1) Para cadastrar.\n(2) Para consultar.\n(0) Para sair.");   
menu_opcao = prompt("");

switch(menu_opcao){
    case "1":
        descricao = prompt("Digite a descrição do compromisso: ");
        dia = prompt("Informe o dia do compromisso: ");

        compromissos.push(descricao);
        compromissos_dia.push(dia);
        break;

    case "2":
        dia = prompt("Digite o dia que deseja consultar apontamentos: : ");
        
        if(compromissos_dia.indexOf(dia) != -1){
            indice = compromissos_dia.indexOf(dia);
            descricao = compromissos[indice];

            console.log('==Apontamentos do dia', dia, '==');
            console.log(descricao);
        }
        else{  
            console.log("Não existem apontamentos para o dia informado. ");
        
}
break;
default:
    console.log("Saindo....");
        break;

}
}