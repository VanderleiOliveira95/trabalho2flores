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
Descritivo: 26. Crie uma função com parâmetro padrão: `digaOla(nome = 'Visitante')`. 
*******************************************************************************/   

// Se nenhum nome for informado, usa 'Visitante' como padrão
function digaOla(nome = 'Visitante') {
  console.log(`\nOlá, ${nome}!`);
}
 
digaOla("Aline");  // Usa o nome informado
digaOla();          // Usa o valor padrão 'Visitante'
 