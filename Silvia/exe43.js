// -----------------------------------------
//Silvia de Oliveira Fabro Exercicio 43
// Função com Callback
// -------------------------------------------

// Eu crio a função que recebe dois números e um callback
// O callback é uma função que eu passo como parâmetro
function operacao(a, b, callback) {

  // Eu executo o callback passando a e b para ele
  let resultado = callback(a, b);

  // Exibe o Resultado
  console.log("Resultado: " + resultado);

}

// Eu crio uma Arrow Function para somar
const somar = (a, b) => a + b;

// Eu crio uma Arrow Function para multiplicar
const multiplicar = (a, b) => a * b;

// Eu chamo a função passando o callback de somar
operacao(20, 6, somar);

// Eu chamo a função passando o callback de multiplicar
operacao(20, 6, multiplicar);
