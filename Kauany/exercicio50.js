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
Descritivo: 50. Implemente um "Currying" simples: `soma(2)(3)` deve retornar 5. 
*******************************************************************************/   

// Currying é quando uma função retorna outra função
// Em vez de soma(2, 3), chamamos soma(2)(3)
function soma(a) {
  // Retorna uma nova função que recebe o segundo número
  return function(b) {
    return a + b; // Soma os dois valores
  };
}
 
let resultado50 = soma(2)(3); // Chama soma(2) -> retorna função -> chama com (3)
console.log(`\nsoma(2)(3) = ${resultado50}`); // 5
 
// Também pode guardar a função do meio em uma variável:
let somaComDois = soma(2); // somaComDois agora é a função que soma com 2
console.log(`somaComDois(20) = ${somaComDois(20)}`); 