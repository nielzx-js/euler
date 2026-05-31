/*
“Se listarmos todos os números naturais abaixo de 10 que sejam múltiplos de 3 ou de 5, 
obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.
Encontre a soma de todos os múltiplos de 3 ou de 5 abaixo de 1000.”
*/
let limite=1000

let soma=0
for(let i=0;i<limite;i++){
    if(i%3===0 || i%5===0){
        soma+=i
    }
}
console.log(soma)