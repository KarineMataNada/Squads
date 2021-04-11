/*
O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.
Valor: 1202.00
Pagamento em cheque.
Valor: 336.00
Pagamento em dinheiro.

*/

const ler = require("prompt-sync")();

console.log("Pagamento fornecedores");

valor = ler("Digite o valor do boleto:")


//processamento
if(valor >= 1000) console.log("Valor:", valor, "\nPagamento em chegue!");
else if(valor < 1000) console.log("Valor:", valor, "\nPagamento em dinheiro.");
//saida