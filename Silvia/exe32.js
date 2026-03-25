//--------------------------------------
//Silvia de Oliveira Fabro exercicio 32  
// Array de nomes para string com vírgulas
// -----------------------------------------

//Array de nomes
let nomes = ["Ana", "Carlos", "Beatriz", "João", "Silvia", "Selena Gomez", "Justin"];

// Variável que vai receber a string final
let resultado = "";

// Percorremos cada nome do array com o for
for (let i = 0; i < nomes.length; i++) {

  // Adicionamos o nome e a vírgula à string
  resultado = resultado + nomes[i] + ", ";

}

// Exibe o resultado final!! 
console.log("String: " + resultado);