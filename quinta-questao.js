// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

function exibirTextoInvertido(str) {
    const textoOriginal = `Texto original: ${str}`;
    const textoInvertido = `Texto invertido: ${inverterString(str)}`;
    console.log(textoOriginal);
    console.log(textoInvertido);
}

const texto = 'Volkswagen';
exibirTextoInvertido(texto);
