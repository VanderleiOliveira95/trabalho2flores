# Lista de Exercícios - Fundamentos de JavaScript

Este repositório contém uma lista com 50 exercícios para praticar os fundamentos de JavaScript.

## Alunos do Grupo
- Aline
- Kauany
- Silvia
- Lucas
- Gilberto
- Vanderlei
- Yuri

---

## LISTA DE EXERCÍCIOS

### Estruturas de Decisão (Condicionais)

1. Crie um programa que verifique se um número é par ou ímpar. (ALINE)
2. Faça um script que receba a idade de uma pessoa e diga se ela pode votar (16 anos ou mais). (SILVIA)
3. Escreva uma função que receba dois números e retorne o maior deles. (LUCAS)
4. Crie um sistema simples de login: se o usuário for "admin" e a senha "1234", mostre "Acesso Permitido", caso contrário, "Acesso Negado". (YURI)
5. Verifique se um ano é bissexto (divisível por 4, mas não por 100, exceto se for divisível por 400). (VANDERLEI )
6. Receba um número de 1 a 7 e exiba o dia da semana correspondente (use `switch`). (YURI)
7. Calcule o IMC (Peso / Altura²) e classifique (Abaixo do peso, Normal, Sobrepeso, Obesidade).
8. Verifique se três lados informados podem formar um triângulo e, se sim, classifique-o (Equilátero, Isósceles, Escaleno).
9. Crie um programa que aplique um desconto de 10% se a compra for acima de R$ 100,00. (KAUANY)
10. Verifique se um caractere informado é uma vogal ou consoante. (VANDERLEI)

### Estruturas de Repetição (Loops)

11. Use um `for` para imprimir os números de 1 a 10 no console. (ALINE)
12. Use um `for` para imprimir a tabuada do 5 (de 1 a 10). (SILVIA)
13. Calcule a soma de todos os números de 1 a 100 usando um loop. (LUCAS)
14. Imprima apenas os números pares de 0 a 20 usando `continue`. (LUCAS)
15. Use um `while` para contar regressivamente de 10 até 0. (YURI)
16. Crie um loop que pare (`break`) quando encontrar o número 7 em uma contagem de 1 a 10. (VANDERLEI)
17. Calcule o fatorial de um número informado (ex: 5! = 5*4*3*2*1). (KAUANY)
18. Gere os primeiros 10 números da sequência de Fibonacci.
19. Dado um array de números, use um loop para encontrar o maior valor.
20. Use um `do...while` para garantir que uma variável seja incrementada pelo menos uma vez antes da verificação.

### Funções (Declaração, Parâmetros e Retorno)

21. Crie uma função `soma(a, b)` que retorne a soma de dois números. (ALINE)
22. Crie uma função `areaRetangulo(base, altura)` que retorne a área. (ALINE)
23. Escreva uma função `saudacao(nome)` que retorne "Olá, [nome]!". (ALINE)
24. Crie uma função que converta graus Celsius para Fahrenheit. (SILVIA)
25. Faça uma função que receba um array e retorne a soma de seus elementos. (SILVIA)
26. Crie uma função com parâmetro padrão: `digaOla(nome = 'Visitante')`. (KAUANY)
27. Escreva uma função que receba um número e retorne `true` se for primo, `false` caso contrário. (YURI)
28. Crie uma função que retorne um objeto com `nome` e `idade` da pessoa. (KAUANY)
29. Implemente uma função recursiva para calcular o fatorial. (LUCAS)
30. Crie uma função que receba uma string e retorne-a invertida. (VANDERLEI)

### Métodos de Arrays e Strings

31. Dada uma string, transforme-a em um array de caracteres. (ALINE)
32. Dado um array de nomes, transforme-o em uma string separada por vírgulas. (SILVIA)
33. Use `.map()` para dobrar todos os valores de um array numérico. (LUCAS)
34. Use `.filter()` para criar um novo array apenas com números pares. (VANDERLEI)
35. Use `.find()` para encontrar o primeiro número maior que 10 em um array.
36. Use `.reduce()` para somar todos os elementos de um array. (VANDERLEI)
37. Verifique se um array contém o elemento "Maçã" usando `.includes()`. (YURI)
38. Dada uma frase, conte quantas palavras ela possui (use `split`). (KAUANY)
39. Ordene um array de números em ordem crescente.
40. Remova os espaços em branco do início e fim de uma string (`trim`).

### Funções Anônimas, Arrow Functions, Callbacks e HOF

41. Converta a função `function soma(a,b) { return a+b }` para Arrow Function. (ALINE)
42. Crie uma Arrow Function com retorno implícito que eleve um número ao quadrado. (SILVIA)
43. Crie uma função `operacao(a, b, callback)` que execute o callback com a e b. (SILVIA)
44. Use `setTimeout` com uma Arrow Function para imprimir "Olá" após 2 segundos. (LUCAS)
45. Use `.forEach()` com Arrow Function para imprimir cada item de um array. (YURI)
46. Crie uma Higher-Order Function que receba uma função e retorne outra função que execute a primeira duas vezes. (VANDERLEI)
47. Encadeie `.filter()` e `.map()`: filtre pares e depois eleve ao quadrado. (KAUANY)
48. Use `.reduce()` para transformar um array de objetos em um objeto somatório (ex: somar salários). (LUCAS)
49. Crie uma função `criarMultiplicador(multiplicador)` que retorne uma função que multiplica qualquer número pelo multiplicador (Closure). (YURI)
50. Implemente um "Currying" simples: `soma(2)(3)` deve retornar 5. (KAUANY)

---

## Estrutura do Repositório

```
trabalho2flores/
├── README.md
├── Aline/
├── Kauany/
├── Silvia/
├── Lucas/
├── Gilberto/
├── Vanderlei/
└── Yuri/
```

Cada aluno deve colocar seus exercícios resolvidos na sua respectiva pasta.
