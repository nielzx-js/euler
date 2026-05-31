/*
Problema Zero

Um número é um quadrado perfeito (ou número quadrado) se ele for o quadrado de um inteiro positivo.

Por exemplo, 25 é um número quadrado porque 5^2 =5×5=25; ele também é um quadrado ímpar.

Os primeiros 5 números quadrados são: 1, 4, 9, 16 e 25, e a soma dos quadrados ímpares é:

1 + 9 + 25 = 35

Entre os primeiros 652 mil números quadrados, qual é a soma de todos os quadrados ímpares?
*/
let n = 245500n
let soma= n*(2n * n - 1n) * (2n *n +1n)/3n
console.log(soma.toString())