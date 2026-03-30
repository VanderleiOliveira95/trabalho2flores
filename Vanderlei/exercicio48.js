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
const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 5500 }
];

const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log("Soma dos salários: ", totalSalary);
