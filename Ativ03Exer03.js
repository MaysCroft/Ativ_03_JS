// Atividade 03 Exercício 03

const ler = require('readline-sync');

let maior = 0, menor = 0;

for (let i = 1; i <= 10; i++) {

    let num = ler.questionInt(i + " - Digite um Numero: ");

    if (num > 5) {
        maior++;
    } else {
        menor++;
    }
}

console.log("Números MAIORES que 5: " + maior);
console.log("Números MENORES que 5: " + menor);