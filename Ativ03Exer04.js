// Atividade 03 Exercício 04

const ler = require('readline-sync');

let nome, cidade, bh = 0, naobh = 0;

for (let i = 1; i <= 20; i++) {

    console.log("----------------------------------------");
    nome = ler.question("- Digite seu Nome: ");
    cidade = ler.questionInt("- Sua Cidade Natal: \n- 1. BH \n- 2. Outra Cidade \n=> ");
    console.log("----------------------------------------");

    if (cidade == 1) {
        bh++;
    } else {
        naobh++;
    }
}

console.log("-----------------------------------------------");
console.log("- Pessoas que moram em BH: " + bh);
console.log("- Pessoas que moram em Outras Cidades: " + naobh);
console.log("-----------------------------------------------");