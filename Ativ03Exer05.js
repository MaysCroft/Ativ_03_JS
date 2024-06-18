// Atividade 03 Exercício 05

const ler = require('readline-sync');

let idade, cont = 0, soma = 0;

do {

    idade = ler.questionInt("Digite uma Idade ou -1 para Sair: ");

    if (idade >= 0) {
        soma += idade;
        cont++;
    }

} while (idade > 0);

if (cont > 0) {
    const media = soma / cont;
    console.log("A Média das Idades é:" , media.toFixed(2));
} else {
    console.log("Idade Inválida!");
}