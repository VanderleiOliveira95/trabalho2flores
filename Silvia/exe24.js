// ---------------------------------------
// Silvia de Oliveira Fabro exercicio 24
// Conversor de Celsius para Fahrenheit
// ----------------------------------------
 
// Declaramos a função com um parâmetro chamado "celsius"
function converter(celsius) {
 
  // Fazemos o cálculo da conversão
  let resultado = (celsius * 9 / 5) + 32;
 
  // Retornamos o resultado
  return resultado;
 
}
 
// Chamamos a função passando um valor
let resposta = converter(100);
 
// Le no terminal o resultado : 
console.log("100°C em Fahrenheit é: " + resposta + "°F");