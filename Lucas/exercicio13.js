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
Descritivo: Calcule a soma de todos os números de 1 a 100 usando um loop.
*******************************************************************************/

//Essa função recebe um valor e soma a sequencias dos numeros e guarda na variavel total que sempre soma ela mesmo mais i, e retorna o valor ao fim do loop
function calcTotal (num){
    let total = 0;
    for (let i = 1; i <= num ; i++) {
        total += i;
    }
    return total;
}

console.log("A soma de todos os valores é : ", calcTotal(3));