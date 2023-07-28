const entrada= require("readline-sync");

let numero : number = entrada.question("Digite um numero: ");

for(let i = 0; i<= numero; i = i+2){

console.log(i);
}