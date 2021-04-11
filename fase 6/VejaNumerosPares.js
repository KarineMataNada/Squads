/*No programa “Veja os números pares”, o console apresentará uma frase 
com os números pares entre 2 e 10, separados por vírgula e na mesma linha. 
A frase termina com ponto, não com vírgula. Após escrever a frase, o sistema
 pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência 
 (entre 12 e 20 etc).
 */


 const ler = require("prompt-sync")();

 console.log("==Veja os números pares==");
 
 console.log("2, 4, 6, 8, 10.");
 
 
 mensagem = ""
 contador = 1;
 
   for (i=12; i%2==0;i=i+2) {
 
     mensagem += i;
 
     if(contador %5 == 0) {
       opcao = ler("Deseja continuar a execução? S/N");
       if(opcao == "S") {
         mensagem += ".";
         console.log(mensagem);
         mensagem = "";
       }
       else {
         console.log("Adeus")
         break;
       }
     }
     else {mensagem += ", ";}
 
 
     contador = contador + 1;
   }
  
  
