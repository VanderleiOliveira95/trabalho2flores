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
Descritivo: . Verifique se três lados informados podem formar um triângulo e, se sim, classifique-o (Equilátero, Isósceles, Escaleno).
*******************************************************************************/
// 1. definimos os valores dos 3 lados dos triângulos.
const lado1= 4; 
const lado2 = 4;
const lado3 = 4;

// 2. Criamos uma variável vazia para armazenar a classificação de a qual triângulo se refere.
let classificacao = "";

// 3. cria as condições (if/else) para checar as comparações dos triangulos.
if (lado1 == lado2 && lado2 == lado3) {
    classificacao = " o triângulo é equilatero";
} else if (lado1 == lado2 && lado2 != lado3) {
    classificacao = " o triângulo é isóceles";
} else if (lado1 != lado2 && lado2 == lado3) {
    classificacao = " o triângulo é isóceles";
} else {
    classificacao = "o triângulo é escaleno";
}

// 4. exibe o tipo de triangulo encontrado.
console.log("Classificação: " + classificacao);