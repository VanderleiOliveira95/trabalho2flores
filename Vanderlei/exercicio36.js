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
Data: 05 de Março de 2026
Descritivo: Escreva uma função que receba dois números e retorne o maior deles.
*******************************************************************************/
//36. Use `.reduce()` para somar todos os elementos de um array.
const readline = require('readline');

/**
 * Calcula a soma de todos os elementos do array usando reduce
 * @param {number[]} numbers - Array de números
 * @returns {number} A soma de todos os elementos
 */
function calcularSoma(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Array deve conter pelo menos um elemento');
    }
    return numbers.reduce((total, num) => {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error(`Valor inválido: ${num}`);
        }
        return total + num;
    }, 0);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Digite os números separados por vírgula (ex: 1,2,3,4,5)');
rl.question('Números: ', (input) => {
    try {
        const numbers = input
            .split(',')
            .map(str => {
                const num = parseFloat(str.trim());
                if (isNaN(num)) {
                    throw new Error(`"${str.trim()}" não é um número válido`);
                }
                return num;
            });

        if (numbers.length === 0) {
            throw new Error('Nenhum número foi digitado');
        }

        const soma = calcularSoma(numbers);
        console.log(`\nArray processado: [${numbers.join(', ')}]`);
        console.log(`Soma total: ${soma}`);
    } catch (error) {
        console.error(`\nErro: ${error.message}`);
    } finally {
        rl.close();
    }
});