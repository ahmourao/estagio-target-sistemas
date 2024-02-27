// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

import { readFile } from 'fs';

// Leitura dos dados
readFile('./faturamento.json', 'utf8', (erro, dados) => {
  if (erro) {
    console.error('Erro ao ler o arquivo JSON: ', erro);
    return;
  } 

  // Conversão
  const faturamento = JSON.parse(dados).faturamentoDiario;

  function menorFaturamentoDiario(faturamento) {
    // A função vai procurar o menor valor entre todos os valores da lista
      return Math.min(...faturamento);
  }

  function maiorFaturamentoDiario(faturamento) {
      return Math.max(...faturamento);
  }

  function mediaMensalFaturamento(faturamento) {
      // Função para calcular a média mensal de faturamento diário, excluindo os dias sem faturamento
      const diasComFaturamento = faturamento.filter(valor => valor > 0);
      const soma = diasComFaturamento.reduce((total, valor) => total + valor, 0);
      return soma / diasComFaturamento.length;
  }

  function diasSuperiorMediaMensal(faturamento) {
      // Função para contar o número de dias em que o faturamento diário foi superior à média mensal
      const media = mediaMensalFaturamento(faturamento);
      return faturamento.reduce((contagem, valor) => (valor > media ? contagem + 1 : contagem), 0);
  }

  console.log('Menor faturamento diário:', menorFaturamentoDiario(faturamento));
  console.log('Maior faturamento diário:', maiorFaturamentoDiario(faturamento));
  console.log('Número de dias com faturamento superior à média mensal:', diasSuperiorMediaMensal(faturamento));
});
