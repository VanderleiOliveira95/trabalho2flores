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
// Descritivo: Receba um número de 1 a 7 e exiba o dia da semana correspondente (use `switch`).
// *******************************************************************************/ -->

const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Digite um numero de 1 a 7 para ver seu correspondente da semana: ", (day_number) =>{

    switch (day_number){
        case "1":
            console.log("Domingo");
            break;
        case "2":
            console.log("Segunda-Feira");
            break;
        case "3":
             console.log("Terça-Feira");
             break;
        case "4":
            console.log("Quarta-Feira");
            break;
        case "5":
            console.log("Quinta-Feira");
            break;
        case "6":
            console.log("Sextou!");
            break;
        case "7":
            console.log("Sabado");
            break;
            
    }

    r1.close()
});