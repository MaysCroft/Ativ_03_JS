// Atividade 03 Exercício 09

const ler = require('readline-sync');

const num1 = ler.questionFloat("- Digite quantos numeros deseja processar: ");

for (let i = 0; i < num1; i++) {

    const num2 = ler.questionFloat("- Digite um numero para calcular o Fatorial: ");

    let fatorial = 1;
    for (let x = 2; x <= num2; x++) {
        fatorial *= x;
    }

    console.log("------------------------------");
    console.log(`- Valor: ${num2} \n- Valor Fatorial: ${fatorial}`);
    console.log("------------------------------");
}