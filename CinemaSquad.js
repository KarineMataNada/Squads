//1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia entrada, para a reserva, basta informar o nome e se é meia ou não, é permitido apenas uma reserva por nome.
//2. Após os 5 reservados, o cliente pode retirar se ingresso informando o seu nome, o ingresso irá informar seu número, nome de quem reservou e se é meia ou não.


var ler = require('prompt-sync')()

ingressos = []
ingressos_meia = []
numero_cliente = []

num_ingressos = ingressos.length
num_ingressos_meia = ingressos_meia.length
num_ingressos_total = num_ingressos + num_ingressos_meia

while (num_ingressos_total <= 5 ) {
    var nome = ler("Qual seu nome?");
    if(ingressos.indexOf(nome) != -1 || ingressos_meia.indexOf(nome) != -1){
        console.log('Só é permitida apenas uma reserva por nome');
    }
    else {
        var eh_meia = ler('É meia entrada??? S/N');
        if (eh_meia == 'S') {
            if (num_ingressos_meia >= 2) {
                console.log('Numero de ingressos meia entrada excedido');
            } else {
                ingressos_meia.push(nome);
                numero_cliente.push(numero_cliente + 1);
            }
        }
        else {
            ingressos.push(nome);
            numero_cliente.push(numero_cliente + 1);
        }
    }
}

// RETIRADA DE INGRESSOS

retirada = true

while ( retirada ) {
    var opcao = ler('Deseja retirar seu ingresso? S/N');
    if (opcao == 'S') {
        var nome = ler("Qual seu nome?");
        if (ingressos.indexOf(nome) != -1) {
            var pos_ingresso = ingressos.indexOf(nome);
            var pos_numero = numero_cliente.indexOf(nome);
            ingresso_retirado = 'Nome: ' + nome + '/ numero cliente' + pos_ingresso + ' (Não é meia entrada)'
            console.log(ingresso_retirado);
        }
        else if (ingressos_meia.indexOf(nome) != -1) {
            var pos_ingresso = ingressos_meia.indexOf(nome);
            var pos_numero = numero_cliente.indexOf(nome);
            ingresso_retirado = 'Nome: ' + nome + '/ numero cliente' + pos_ingresso + ' (É meia entrada)'
            console.log(ingresso_retirado);
        }
        else {
            ingresso_retirado = 'Sem ocorrencia de ingresso cadastrado'
            console.log(ingresso_retirado);
        }
    } else {
        retirada = false;
    }
}


//n tive tempo para terminar ta bugado