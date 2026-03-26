// ------------------------------
//Silvia de Oliveira Fabro Exercicio 25
// Soma dos elementos de um array
// ------------------------------

function somarArray(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];

  }
  return soma;
}

let meuArray = [10, 20, 30, 40];
let resultado = somarArray(meuArray);
console.log("Array: " + meuArray);
console.log("Soma total: " + resultado);
