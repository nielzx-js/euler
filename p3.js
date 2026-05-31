/*
Os fatores primos de 13195 são 5, 7, 13 e 29.
Qual é o maior fator primo do número 600851475143?
*/

let numero= 600851475143
let divisores=[]
let primos=[]

for(let i=1;i<=Math.sqrt(numero);i++){
    if(numero%i===0){
        divisores.push(i)
    }
}

divisores.forEach(d=>{
    let primo=true
    for(let i = 2; i<d;i++){
        if(d%i===0){
            primo = false

        }
    }
    if(primo){
        primos.push(d)
    }
})
console.log(primos[primos.length-1])
