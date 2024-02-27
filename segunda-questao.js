// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function verificaFibonacci(numero) {
    
    let primeiro = 0;
    let segundo = 1;
    
    while (segundo <= numero) {
        // Se o número informado for igual a algum número da sequência, retorna verdadeiro
        if (segundo === numero) {
            return true;
        }

        let proximo = primeiro + segundo;

        primeiro = segundo;
        segundo = proximo;
    }
    // Se o número informado não for encontrado na sequência, retorna falso
    return false;
}


let entrada = 21;
let pertence = verificaFibonacci(entrada);

if (pertence) {
    // Se for true ele entra no if automaticamente
    console.log(`${entrada} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${entrada} não pertence à sequência de Fibonacci.`);
}
