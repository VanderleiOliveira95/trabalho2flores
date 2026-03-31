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
Descritivo:  7. Calcule o IMC (Peso / Altura²) e classifique (Abaixo do peso, Normal, Sobrepeso, Obesidade).
*******************************************************************************/
// 1. Definimos as variaves Peso e altura
const peso = 64; 
const altura = 1.61;

// 2. Calculamos o IMC
// lemnbrando que na formula devemos elevara altura ao quadrado
const imc = peso / (altura ** 2);

// 3. Criamos uma variável vazia para armazenar a classificação de texto em relação ao peso encontrado
let classificacao = "";

// 4. cria as condições (if/else) para checar o resultado
if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

// 5. Exibimos o resultado no console
// .toFixed(2) limita as casas decimais a duas casas
console.log("Seu IMC é: " + imc.toFixed(2));
console.log("Classificação: " + classificacao);