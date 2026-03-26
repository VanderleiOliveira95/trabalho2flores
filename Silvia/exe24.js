// ---------------------------------------
// Silvia de Oliveira Fabro exercicio 24
// Conversor de Celsius para Fahrenheit
// ----------------------------------------
 
function converter(celsius) {
  let resultado = (celsius * 9 / 5) + 32;
  return resultado; 
}

let resposta = converter(100);
console.log("100°C em Fahrenheit é: " + resposta + "°F");
