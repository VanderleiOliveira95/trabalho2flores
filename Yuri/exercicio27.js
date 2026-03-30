// <!-- /******************************************************************************
// Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
// Disciplina: Programação Front-End
// Professor: José Carlos Flores
// Turma: ADS3B
// Componentes: 
//              25246894-2  - Lucas Alves Bonnet
//              25153556-2  - Aline Rodrigues Iorkievicz
//              25036114-2  - Vanderlei Oliveira Junior
//              250181953-2 - Gilberto Espanga Junior
//              25216347-2  - Kauany Paula Da Silva 
//              25355474-2  - Silvia De Oliveira Fabro 
//              25178018-2  - Yuri Kauan De Paula 
// Data: 28 de Março de 2026
// Descritivo: 27. Escreva uma função que receba um número e retorne `true` se for primo, `false` caso contrário.
// *******************************************************************************/ -->

const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

r1.question("Digite um numero para saber se é primo ou não: ", (num) => {

    function num_primo (num){
        if(num <= 1)return false;
            for(let i = 2; i < num; i++){
            if (num % i ===0)return false;
        }
    return true;
    }
    console.log(num_primo(num))
    r1.close();
});
