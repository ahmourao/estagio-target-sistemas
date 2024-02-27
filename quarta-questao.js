// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentoPorEstado = {
    "SP": "67,836.43",
    "RJ": "36,678.66",
    "MG": "29,229.88",
    "ES": "27,165.48",
    "Outros": "19,849.53"
};

// Converter valores de vírgula para ponto
function converterParaDecimal(valor) {
    return parseFloat(valor.replace(",", "."));
}

const totalMensal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + converterParaDecimal(valor), 0);

const percentuaisPorEstado = {};
for (const estado in faturamentoPorEstado) {
    const percentual = (converterParaDecimal(faturamentoPorEstado[estado]) / totalMensal) * 100;
    percentuaisPorEstado[estado] = percentual.toFixed(2).replace(".", ","); // Formatando com vírgula e arredondando para duas casas decimais
}

console.log("Percentual de representação por estado:");

for (const estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
}