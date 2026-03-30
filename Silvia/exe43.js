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
Descritivo:Crie uma função `operacao(a, b, callback)` que execute o callback com a e b.
*******************************************************************************/

function operacao(a, b, callback) {
  let resultado = callback(a, b);
  console.log("Resultado: " + resultado);

}

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
operacao(20, 6, somar);
operacao(20, 6, multiplicar);
