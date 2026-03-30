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
Descritivo:  17. Calcule o fatorial de um número informado (ex: 5! = 5*4*3*2*1).
*******************************************************************************/

function calcularFatorial(numero) {
  
  if (numero === 0 || numero === 1) { // O fatorial de 0 e 1 é sempre 1
    return 1;
  }
 
  let resultado = 1; // Começa com 1 para multiplicar
 
    for (let i = numero; i >= 1; i--) { // Loop que vai do número até 1, multiplicando tudo 

    resultado = resultado * i; // Multiplica o resultado pelo valor atual de i
  }
 
  return resultado;
}
 
console.log(`\n10! = ${calcularFatorial(10)}`); 
console.log(`4! = ${calcularFatorial(4)}`); 
 