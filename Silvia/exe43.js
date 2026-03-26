// -----------------------------------------
//Silvia de Oliveira Fabro Exercicio 43
// Função com Callback
// -------------------------------------------

function operacao(a, b, callback) {
  let resultado = callback(a, b);
  console.log("Resultado: " + resultado);

}

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
operacao(20, 6, somar);
operacao(20, 6, multiplicar);
