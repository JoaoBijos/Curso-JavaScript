const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// Verificar se é um número inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Usamos o toFixed para mostrar somente um número determinado de casas após a vírgula 
console.log(media.toFixed(2))
// Mostrar o valor como String
console.log(media.toString())
// Mostrar o valor como String/Binário
console.log(media.toString(2))

// tipo da média
console.log(typeof media)

// Number com o 'N' maiúsculo, é uma função
console.log(typeof Number) 