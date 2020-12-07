function rand ([min = 0, max = 1000]){
    // verificando se o minimo é menor que o máximo e trocando os valores caso não for
    if (min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // arredonda para baixo
}

console.log(rand([50,40])) // passando dois valores 
console.log(rand([992])) // passando somente o primeiro 
console.log(rand([, 10])) // passando somente o segundo 
console.log(rand([])) // passando vazio, assim ele assume 0 e 1000 como min e max
console.log(rand()) // passando algo nulo, o que resulta em erro pois não terá o que desconstruir 