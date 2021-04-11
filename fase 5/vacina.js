/* 
Vacina 
perguntar a ideia, sendo 67 anos, pode vacinar hoje. 
sendo inferior, avisar que volta semana que vem.
sendo superior, pq não vacinou ainda?

*/
const ler = require("prompt-sync")();

console.log("==Fila da vacina==");
var vacinar = ler("Digite sua idade: ");

if (vacinar == 67)console.log("Pode vacinar hoje! :)");
else
if (vacinar > 67) console.log("Por que não vacinou ainda?!");
else
console.log("Volte semana que vem!");
 