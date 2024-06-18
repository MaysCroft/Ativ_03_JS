// Atividade 03 Exercício 07

const ler = require('readline-sync');

let prod = [], valor = [], total = 0;

for (let i = 0; i < 15; i++) {
    prod[i] = ler.question(`Digite o Produto ${i + 1}: `);
    valor[i] = ler.questionFloat(`Digite o Valor do Produto ${i + 1}: R$ `);
    total += valor[i];
}

let valcaro = valor[0], valbarato = valor[0];
let prodcaro = prod[0], prodbarato = prod[0];

for (let i = 0; i < 15; i++) {
    if (valor[i] > valcaro) {
        valcaro = valor[i];
        prodcaro = prod[i];      
    }
    if (valor[i] < valbarato) {
        valbarato = valor[i];
        prodbarato = prod[i];     
    }
}

console.log("--------------------------------------------------");
console.log("- Total dos Produtos: R$ " + total.toFixed(2));
console.log("- Produto mais Caro: " + prodcaro + " R$ " + valcaro);
console.log("- Produto mais Barato: " + prodbarato + " R$ " + valbarato);
console.log("--------------------------------------------------");