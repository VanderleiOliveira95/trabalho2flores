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
Descritivo: . Dado um array de números, use um loop para encontrar o maior valor.
*******************************************************************************/
// 1. Definimos um array com vários não estando em ordem.
const numeros = [15, 42, 7, 89, 23, 56, 1];

// 2. criei uma variável que guarda o maior valor encontrado até agora.
// e começo dizendo que o maior é o primeiro elemento (índice 0).
let maiorNumero = numeros[0];

// 3. usando o FOR da pra percorrer o array.
// Começa em 1 porque o 0 já é colocado como o maior numero no inicio.
for (let i = 1; i < numeros.length; i++) {
    
    // 4. Verifico se o número atual da lista é maior que o nosso campeão atual
    if (numeros[i] > maiorNumero) {
        
        // 5. Se for maior, atualizamos a variável com este novo valor.
        maiorNumero = numeros[i];
    }
}

// 6. Exibindo o resultado final no console.
console.log("O maior número encontrado no array é: " + maiorNumero);