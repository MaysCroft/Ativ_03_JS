// Atividade 03 Exercício 15

const ler = require('readline-sync');

let num = ler.questionInt("- Digite um Numero Inteiro Positivo: ");

if (num > 0) {

    console.log("- Os Divisores de " + num + " são: ");

    for (let x = 1; x <= num; x++) {
        if (num % x == 0) {
            console.log(x);
        }
    }

} else {
    console.error("--- Gentileza Digitar um Número Válido! ---");
}