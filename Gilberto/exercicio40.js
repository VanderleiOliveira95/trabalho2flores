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
Data: 31 de Março de 2026
Descritivo: Remova os espaços em branco do início e fim de uma string (`trim`).
*******************************************************************************/
// 1. criei uma string suja com espaços propositais
const textoSujo = "   Olá, Mundo!   ";

// 2. usando trin elimina-se os espaços errados e desnecessários.
const textoLimpo = textoSujo.trim();

// 3. Exibindo resultados para comparação
// Usamos aspas simples no console.log para você conseguir enxergar onde acabava o espaço.
console.log("Texto original: '" + textoSujo + "'");
console.log("Texto com trim: '" + textoLimpo + "'");

// 4. aqui verifica-se o tamanho da string antes e depois de aplicar a trin.
console.log("Tamanho original: " + textoSujo.length); // Conta os espaços
console.log("Tamanho após trim: " + textoLimpo.length); // Apenas caracteres úteis