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
Descritivo: . Gere os primeiros 10 números da sequência de Fibonacci.
*******************************************************************************/
// 1. Criamos um array  com os dois primeiros números da sequência que são 1 e 0.
const fibonacci = [0, 1];

// 2. cria-se um for para calcular do terceiro até o décimo número.
// Começamos o contador 'i' em 2 porque já temos as posições 0 e 1 preenchidas
for (let i = 2; i < 10; i++) {
    
    
    // 3. Calculamos o próximo número somando os dois anteriores
    // O número na posição 'i' é a soma de (i-1) + (i-2)
    const proximoNumero = fibonacci[i - 1] + fibonacci[i - 2];
    
    // 4. Adicionamos o resultado ao final do nosso array
    fibonacci.push(proximoNumero);
}

// 5. Exibimos a sequência completa formatada no terminal, join transforma todos os resultados em uma unica string.
console.log("Os 10 primeiros números de Fibonacci são:");
console.log(fibonacci.join(", "));4