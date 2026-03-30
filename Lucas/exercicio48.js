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
//48. Use `.reduce()` para transformar um array de objetos em um objeto somatório (ex: somar salários).
const readline = require('readline');

/**
 * Calcula a soma total de salários
 * @param {Array<{name: string, salary: number}>} employees - Array de funcionários
 * @returns {number} Soma total dos salários
 */
function calcularSomaSalarios(employees) {
    if (!Array.isArray(employees) || employees.length === 0) {
        throw new Error('Array de funcionários deve conter pelo menos um elemento');
    }

    return employees.reduce((sum, employee) => {
        if (typeof employee.salary !== 'number' || employee.salary < 0) {
            throw new Error(
                `Salário inválido para ${employee.name}: ${employee.salary}`
            );
        }
        return sum + employee.salary;
    }, 0);
}

/**
 * Calcula estatísticas salariais
 * @param {Array<{name: string, salary: number}>} employees - Array de funcionários
 * @returns {Object} Objeto com estatísticas
 */
function calcularEstatisticas(employees) {
    const totalSalary = calcularSomaSalarios(employees);
    const averageSalary = totalSalary / employees.length;
    const maxSalary = Math.max(...employees.map(e => e.salary));
    const minSalary = Math.min(...employees.map(e => e.salary));

    return {
        total: totalSalary,
        media: averageSalary,
        maximo: maxSalary,
        minimo: minSalary,
        quantidade: employees.length
    };
}

// Dados de exemplo
const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 5500 }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('=== SISTEMA DE CÁLCULO DE FOLHA DE PAGAMENTO ===\n');
console.log('Funcionários cadastrados:');
employees.forEach(emp => {
    console.log(`  • ${emp.name}: R$ ${emp.salary.toLocaleString('pt-BR')}`);
});

rl.question(
    '\nDeseja visualizar as estatísticas? (s/n): ',
    (resposta) => {
        try {
            if (resposta.toLowerCase() === 's' || resposta.toLowerCase() === 'sim') {
                const stats = calcularEstatisticas(employees);
                console.log('\n=== ESTATÍSTICAS SALARIAIS ===');
                console.log(`Total de funcionários: ${stats.quantidade}`);
                console.log(
                    `Soma total de salários: R$ ${stats.total.toLocaleString('pt-BR')}`
                );
                console.log(
                    `Salário médio: R$ ${stats.media.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}`
                );
                console.log(
                    `Maior salário: R$ ${stats.maximo.toLocaleString('pt-BR')}`
                );
                console.log(
                    `Menor salário: R$ ${stats.minimo.toLocaleString('pt-BR')}`
                );
            } else {
                const totalSalary = calcularSomaSalarios(employees);
                console.log(
                    `\nSoma dos salários: R$ ${totalSalary.toLocaleString('pt-BR')}`
                );
            }
        } catch (error) {
            console.error(`\nErro: ${error.message}`);
        } finally {
            rl.close();
        }
    }
);
