let valor 
console.log(valor) // nada foi atribuido a variavel, ela se quer foi inicializada, sendo assim é undefined

valor = null // ausência de valor 
console.log(valor) 

// console.log(valor.toString()) - ERRO pois a variavel esta com um valor nulo

// quando queremos zerar uma variavel atribuimos a ela o valor null 

const produto = {}
console.log(produto.preco) // aqui vai dar undefined, pois a variavel está definida, porém o preço não está 
console.log(produto) // retorna vazio

produto.preco = 3.50
console.log(produto) // aqui já teremos o valor 3.5 sendo retornado 
console.log(!!produto.preco) // retorna true pois está definido 

produto.preco = undefined // evite atribuir um valor undefined
console.log(!!produto.preco) // retorna falso pois está indefinido

delete produto.preco // deletando o preco do produto 
console.log(produto.preco) // retorna undefined pois o preco não está mais definido 


// console.log(valor2) - isso será is not defined, ou seja, se quer declarado foi 

