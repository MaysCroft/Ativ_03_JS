// Atividade 03 Exercício 06

const ler = require('readline-sync');

let totaluser = 0, totalhomem = 0, totalmulher = 0;

console.log("Digite Nome do usuário e Sexo (M ou F) ou 0 para SAIR");

while (true) {

    let nome = ler.question("Digite Nome do Usuario: ");
    if (nome === '0') {
        break;
    }

    let sexo = ler.question("Digite Sexo do Usuario (M/F): ");
    if (sexo.toUpperCase() === 'M') {
        totalhomem++;
    } else if (sexo.toUpperCase() === 'F') {
        totalmulher++;
    } else {
        console.log("Sexo Inválido, digite M ou F");
    }

    totaluser++;
}

if (totaluser > 0) {
    let porcenthomem = (totalhomem * totaluser) / 100;
    let porcentmulher = (totalmulher * totaluser) / 100;

    console.log("Total de Usuários: " + totaluser);
    console.log("Porcentagem de Homens: " + porcenthomem);
    console.log("Porcentagem de Mulheres: " + porcentmulher);
} else {
    console.log("Nenhum Dado Informado! Encerrando Sistema!");
}