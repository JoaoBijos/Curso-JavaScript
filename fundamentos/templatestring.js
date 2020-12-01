const nome = 'Rebeca'

const concatenacao = 'Olá ' + nome + '!' // não suporta quebra de linha 

const template = `Olá ${nome}!` // suporta quebra de linha 
console.log(concatenacao, template)

// Expressões..
console.log(`1 + 1 = ${1+1}`)


const up = texto => texto.toUpperCase() // função 
console.log(`Ei... ${up('cuidado')}!`) // chamando a função passando um parametro 