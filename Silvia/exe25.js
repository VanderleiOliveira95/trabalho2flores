// ------------------------------
//Silvia de Oliveira Fabro Exercicio 25
// Soma dos elementos de um array
// ------------------------------

// Declaramos a função com um parâmetro chamado "numeros"
function somarArray(numeros) {

  // Variável que vai acumulando a soma
  let soma = 0;

  // Percorremos cada elemento do array com o for
  for (let i = 0; i < numeros.length; i++) {

    // A cada repetição, somamos o elemento atual
    soma = soma + numeros[i];

  }

  // Retornamos o total
  return soma;

}

// Criamos um array de números
let meuArray = [10, 20, 30, 40];

// Chamamos a função passando o array
let resultado = somarArray(meuArray);

// Exibimos o resultado
console.log("Array: " + meuArray);
console.log("Soma total: " + resultado);