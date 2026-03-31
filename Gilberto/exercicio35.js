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
Descritivo: Use `.find()` para encontrar o primeiro número maior que 10 em um array.
*******************************************************************************/
// Find é um método que percorre a array procurando o primeiro elemento que atenda a uma condição especificada.
// 1. Criamos um array com vários números
const listaNumeros = [2, 5, 8, 12, 4, 20, 7];

// 2. Usamos o método .find()
// Ele recebe uma função que testa cada número da lista
const primeiroMaior = listaNumeros.find((numero) => {
    
    // 3. Definimos a condição: o número é maior que 10?
    // O .find() retorna o primeiro que responder "true" que a condição foi atendida.
    return numero > 10;
});

// 4. Exibimos o resultado no console
console.log("O primeiro número maior que 10 é: " + primeiroMaior);