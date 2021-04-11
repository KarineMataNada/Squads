/*O abecedário da Xuxa agora segue cantando a definição musical 
até que a criança decida parar de ouvir, pressionando o zero.
*/

const ler = require("prompt-sync")();

const XUXA = 10;
var xaxa = 1;
var baixinho;


while (xaxa< XUXA)
{
    console.log("A de amor,")
    console.log("B de baixinho")
    console.log("C de coração")
    console.log("D de docinho")
    console.log("E de É hora de apertar o zero")
    console.log("restodamusica.txt")

    baixinho = ler("Para encerrar a repetição aperte 0? ");
    if (baixinho == 0){
        return console.log("Thanks god!");
    }


}