// Atividade 03 Exercício 11

const ler = require('readline-sync');

let numero = 0, somapar = 0, contpar = 0;

while (true) {

    let num = ler.questionFloat("Digite um Numero ou 0 Para SAIR: ");
    
    if (num == 0) {
        break;
    }

    if (numero % 2 == 0) {
        somapar += num; 
        contpar++; 
    }
}

if (contpar > 0) {
    let mediapar = somapar / contpar;
    console.log("A Média dos Números PARES é: " + mediapar.toFixed(2));
} else {
    console.log("Nenhum Número PAR foi digitado!");
}