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
Descritivo: Faça uma função que receba um array e retorne a soma de seus elementos.
*******************************************************************************/

function somarArray(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];

  }
  return soma;
}

let meuArray = [10, 20, 30, 40];
let resultado = somarArray(meuArray);
console.log("Array: " + meuArray);
console.log("Soma total: " + resultado);
