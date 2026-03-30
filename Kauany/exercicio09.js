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
Data: 30 de Março de 2026
Descritivo:  Crie um programa que aplique um desconto de 10% se a compra for acima de R$ 100,00.
*******************************************************************************/

function calcularDesconto(valorCompra) {
  
  if (valorCompra > 100) { // Verifica se o valor da compra é maior que 100
   
    let desconto = valorCompra * 0.10; // Calcula o desconto: 10% do valor da compra
 
    
    let valorFinal = valorCompra - desconto; // Subtrai o desconto do valor original
 
    // Exibe o resultado
    console.log(`Valor original: R$ ${valorCompra}`);
    console.log(`Desconto (10%): R$ ${desconto}`);
    console.log(`Valor final: R$ ${valorFinal}`);
  } else {
    // Se não ultrapassar R$ 100, não há desconto
    console.log(`Sem desconto = Valor final: R$ ${valorCompra}`);
  }
}
 
calcularDesconto(150); // Vai aplicar desconto
calcularDesconto(80);  // Não vai aplicar desconto