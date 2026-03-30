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
Descritivo: 47. Encadeie `.filter()` e `.map()`: filtre pares e depois eleve ao quadrado. 
*******************************************************************************/   

let numeros = [11, 23, 35, 48, 59, 60, 74, 83, 91, 100];
 
let resultado = numeros
  // filter() percorre o array e mantém só os que passarem na condição
  // num % 2 === 0 verifica se o número é par (resto da divisão por 2 é zero)
  .filter(num => num % 2 === 0)
 
  // map() transforma cada elemento — aqui eleva ao quadrado (num * num)
  .map(num => num * num);
 
console.log(`\nNúmeros originais: ${numeros}`);
console.log(`Pares ao quadrado: ${resultado}`);
// Resultado esperado: [2304, 3600, 5476, 10000]
 