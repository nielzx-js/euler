/*
Cada novo termo da sequência de Fibonacci é gerado somando os dois termos anteriores.
 Começando com 1 e 2, os primeiros 10 termos serão:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
Considerando os termos da sequência de Fibonacci cujos valores não ultrapassam quatro milhões,
 encontre a soma dos termos de valor par.
*/

let numero=4000000n
let a = 0n
let b = 1n
let fibo=[a , b]
let pares=[]
let soma=0n


for (let i=0;i<numero;i++){

    let proximo = a + b
    if (proximo > numero) {
    break
}
    a = b
    b = proximo
    fibo.push(b)
    if(proximo%2n===0n){

    pares.push(proximo)

   
  
    }
}

 for(let i=0;i<pares.length;i++){
        soma+=pares[i]
    }
      console.log(soma.toString())
