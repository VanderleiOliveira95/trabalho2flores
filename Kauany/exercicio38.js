/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
 25246894-2 - Lucas Alves Bonnet
 25153556-2 - Aline Rodrigues Iorkievicz
 25036114-2 - Vanderlei Oliveira Junior
 25181953-2 - Gilberto Espanga Junior
 25216347-2 - Kauany Paula da Silva
 25355474-2 - Silvia de Oliveira Fabro
 25178018-2 - Yuri Kauan de Paula
Data: 30 de Março de 2026
Descritivo: 38. Dada uma frase, conte quantas palavras ela possui (use `split`).
*******************************************************************************/   

function contarPalavras(frase) {
  // split(' ') divide a frase em um array separando pelos espaços
  // Ex: "Bom dia" -> ["Bom", "dia"]
  let palavras = frase.split(' ');
 
  // .length retorna o tamanho do array (quantidade de palavras)
  let quantidade = palavras.length;
 
  console.log(`\nFrase: "${frase}"`);
  console.log(`Quantidade de palavras: ${quantidade}`);
}
 
contarPalavras("Jesus Te Ama");