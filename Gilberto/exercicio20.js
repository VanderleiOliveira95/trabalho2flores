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
Descritivo: Use um `do...while` para garantir que uma variável seja incrementada pelo menos uma vez antes da verificação.
*******************************************************************************/
// 1. Iniciamos uma variável com o valor 5
let contador = 5;

// 2. Iniciamos o bloco 'do' 
do {
    // 3. Incrementamos a variável (soma +1 ao valor atual)
    // Isso vai acontecer antes de qualquer teste lógico
    contador++;

    // 4. Mostramos o valor no console para provar que ele mudou
    console.log("O valor dentro do loop agora é: " + contador);

} while (contador < 5); 
// 5. A condição diz "enquanto for menor que 5".
// Como o valor já é 6, a condição é FALSA. 
// Mas como o teste é no final, o código acima já rodou uma vez!

// 6. Resultado final fora do loop
console.log("Loop encerrado. Valor final: " + contador);