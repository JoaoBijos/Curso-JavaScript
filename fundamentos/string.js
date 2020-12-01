const escola = 'Cod3r'

// usando o charAt() descobrimos o que está ocupando certo lugar da string
console.log(escola.charAt(4)) // neste caso descobrimos o que está no quarto espaço da string
console.log(escola.charAt(5)) // não retorna nada, pois não existe nada que esteja na posição 5

console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3')) // posição do elemento desejado 

console.log(escola.substring(1)) // mostra somente da posição 1 pra frente

console.log(escola.substring(0, 3)) // mostra da posição 0 até a posição antes da 3 


console.log('Escola '.concat(escola).concat('!')) // conseguimos concatenar strings
console.log('Escola ' + escola + '!') // conseguimos concatenar strings

console.log(escola.replace(3, 'e')) // dizemos assim que quermos alterar a posição 3, colocando um 'e' nela

console.log(escola.replace(/\d/, 'e')) // dizemos aqui que queremos que todos os numeros sejam substituidos por algo, no caso 'e'

console.log(escola.replace(/\w/g, 'e')) // dizemos aqui que queremos que todas as letras sejam substituidos por algo, no caso 'e'


console.log('Ana,Maria,Pedro'.split(',')) // Converte string em array, usando como regra para a divisão a virgula 