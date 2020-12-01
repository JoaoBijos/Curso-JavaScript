let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive) // com o ponto de exclamação nós negamos a variável, e quando se nega duas vezes ela volta ao seu original


console.log('Os verdadeiros...')

console.log(!!3)
console.log(!!-1)
console.log(!!' ') // somente com espaço ou com texto 
console.log(!![]) 
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true)) // atribuição de verdadeiro 


console.log('Os falsos...')

console.log(!!0)
console.log(!!'') // sem nada 
console.log(!!null) // nulo
console.log(!!NaN) // Not a Number 
console.log(!!undefined) // indefinido
console.log(!!(isActive = false)) // atribuição de falso 


console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))


let nome = ''
console.log(nome || 'Desconhecido')