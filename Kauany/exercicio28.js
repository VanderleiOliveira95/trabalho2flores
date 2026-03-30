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
Descritivo:  28. Crie uma função que retorne um objeto com `nome` e `idade` da pessoa. 
*******************************************************************************/

function criarPessoa(nome, idade) {
  // Retorna um objeto com as propriedades nome e idade
  return {
    nome: nome,   // chave: nome, valor: o que foi passado no parâmetro
    idade: idade  // chave: idade, valor: o que foi passado no parâmetro
  };
}
 
// Guarda o objeto retornado numa variável
let pessoa = criarPessoa("Kauany", 19);
 
// Acessa as propriedades do objeto com ponto (.)
console.log(`\nNome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);