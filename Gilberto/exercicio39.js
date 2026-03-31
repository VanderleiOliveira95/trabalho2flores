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
Descritivo: Ordene um array de números em ordem crescente.
*******************************************************************************/
// 1. Criamos um array de números desordenados
const numeros = [40, 100, 1, 5, 25, 10];

// 2. Usamos o método .sort() com uma função de comparação (a, b)
// Sem essa função, o JavaScript colocaria o "100" antes do "25" (ordem alfabética)
numeros.sort((a, b) => {
    
    // 3. A lógica de comparação:
    // Se (a - b) for negativo, 'a' vem antes de 'b'
    // Se (a - b) for positivo, 'b' vem antes de 'a'
    // Isso garante a ordem numérica crescente
    return a - b;
});

// 4. Exibimos o array já ordenado no console
console.log("Array em ordem crescente:");
console.log(numeros);