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
// Descritivo: 4.Crie um sistema simples de login: se o usuário for "admin" e a senha "1234", mostre "Acesso Permitido", 
// caso contrário, "Acesso Negado"
// *******************************************************************************/ -->

const readline = require("readline");

const r1 =readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

console.log("----DIGITE SEU USUARIO E SENHA----")

r1.question("Digite seu usuario: ", (user) =>{
   r1.question("Digite sua senha: ", (key) =>{

    if (user == "admin" && key == "1234"){
        console.log("Acesso Permitido!");
   } else {
    console.log("Acesso Negado!");
   }
    r1.close();
   });
});

