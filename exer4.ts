const entrada4= require("readline-sync");

let ant = 1;
let pred = 0;

for (let i = 0; i <= 10; i++){
    let fib = ant + pred;

    console.log(fib);

    pred = ant
    ant = fib
}