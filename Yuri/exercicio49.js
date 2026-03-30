// // <!-- /******************************************************************************
// // Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
// // Disciplina: Programação Front-End
// // Professor: José Carlos Flores
// // Turma: ADS3B
// // Componentes: 
// //              25246894-2  - Lucas Alves Bonnet
// //              25153556-2  - Aline Rodrigues Iorkievicz
// //              25036114-2  - Vanderlei Oliveira Junior
// //              250181953-2 - Gilberto Espanga Junior
// //              25216347-2  - Kauany Paula Da Silva 
// //              25355474-2  - Silvia De Oliveira Fabro 
// //              25178018-2  - Yuri Kauan De Paula 
// // Data: 28 de Março de 2026
// // Descritivo: 49. Crie uma função `criarMultiplicador(multiplicador)` que retorne uma função que multiplica qualquer número 
// pelo multiplicador (Closure).
// // *******************************************************************************/ -->

function criarMultiplicador(multiplicador) {
  return function(numero) {
    return numero * multiplicador;
  }
}


const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(dobrar(5));
console.log(triplicar(4));



