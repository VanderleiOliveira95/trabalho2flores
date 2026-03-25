// ------------------------------------------
//Silvia de Oliveira Fabro Exercicio 42
// Arrow Function número ao quadrado
// ------------------------------------------
 
// Jeito normal que eu já conheço com "function"
function quadradoNormal(numero) {
  return numero * numero;
}
 
// Agora eu faço o mesmo com Arrow Function
// Eu não preciso de "function", nem de "return", nem de chaves {}
const quadrado = numero => numero * numero;
 
// Eu chamo as duas e exibo o resultado
console.log(quadradoNormal(5)); // 25
console.log(quadrado(5));       // 25 - mesmo resultado!