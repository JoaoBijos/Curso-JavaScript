// v e v -> v 
// v e f -> f 
// f e ? -> f

function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // se um ou o outro for verdadeiro vamos comprar sorvete 
    const comprarTv50 = trabalho1 && trabalho2 // somente se os dois forem verdade iremos comprar a Tv50 
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) - operador bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário 

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // cria um objeto 
}

logical operators

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))