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
Descritivo: 1. Crie um programa que verifique se um número é par ou ímpar.
*******************************************************************************/
//1. Crie um programa que verifique se um número é par ou ímpar.


// Solicita ao usuário que digite um número
let numero = prompt("Digite um número:"); // prompt abre uma caixa para o usuário inserir um valor

// Converte o valor digitado (string) para número
numero = Number(numero); // Number transforma o texto em número

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) { // % é o operador de resto da divisão
    console.log("O número é par"); // se o resto da divisão por 2 for 0, é par
} else {
    console.log("O número é ímpar"); // caso contrário, é ímpar
}
