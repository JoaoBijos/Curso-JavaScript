const numeros = [1,2,3,4,5,6,7,8,9,10]

for (x in numeros) {
    if( x == 5 ){
        break
    }
    console.log(`x = ${numeros[x]}`)
}

for (y in numeros) {
    if(y == 5){
        continue // neste caso o indice 5 não será executado, ele será pulado 
    }
    console.log(`${y} = ${numeros[y]}`)
}

externo: for (a in numeros) {
    for (b in numeros){
        if (a == 2 && b == 3) break externo // este break para as duas estruturas que estão com o for
        console.log(`Par = ${a},${b}`)
    }
}

console.log(`Fim!`)