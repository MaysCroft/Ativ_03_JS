// Atividade 03 Exercício 14

const ler = require('readline-sync');

let votocand1 = 0, votocand2 = 0, votocand3 = 0;
let branco = 0, nulo = 0;
let eleit = 0;

while (true) {

    let voto = ler.questionInt("- Digite o Voto (1, 2, 3, 0 para BRANCO, 4 para NULO) ou -1 para SAIR: ");
    
    if (voto == -1) {
        break; 
    }
    
    switch (voto) {
        case 1:
            votocand1++;
            break;
        case 2:
            votocand2++;
            break;
        case 3:
            votocand3++;
            break;
        case 0:
            branco++;
            break;
        case 4:
            nulo++;
            break;
        default:
            console.log("--- Voto Inválido! ---");
            break;
    }
    
    eleit++;
}

let vencedor = 0;
let totalvotos = Math.max(votocand1, votocand2, votocand3);

if (totalvotos === votocand1) {
    vencedor = 1;
} else if (totalvotos === votocand2) {
    vencedor = 2;
} else if (totalvotos === votocand3) {
    vencedor = 3;
}

console.log("-----------------------------------");
console.log("- Candidato Vencedor: " + vencedor);
console.log("- Votos em Branco: " + branco);
console.log("- Votos Nulo: " + nulo);
console.log("- Eleitores Presentes: " + eleit);
console.log("-----------------------------------");