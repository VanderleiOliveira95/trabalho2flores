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

//10. Verifique se um caractere informado é uma vogal ou consoante.
const readline = require('readline');

function isVowelOrConsonant(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerChar = char.toLowerCase();
    if (vowels.includes(lowerChar)) {
        return "Vogal";
    } else if (lowerChar >= 'a' && lowerChar <= 'z') {
        return "Consoante";
    } else {
        return "Caractere inválido";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma letra: ', (input) => {
    const char = input.trim().charAt(0);
    const result = isVowelOrConsonant(char);
    console.log("O caractere é: ", result);
    rl.close();
});