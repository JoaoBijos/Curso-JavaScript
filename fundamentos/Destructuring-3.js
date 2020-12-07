function rand( {min = 0, max = 1000}){ // função que vai retornar um número aleatorio 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

const obj = { max: 50, min: 40}
console.log(rand(obj))

// como aqui foi passado somente o minimo, o maximo sera o que foi pré definido(1000)
console.log(rand({min: 955})) 

// passando um objeto vazio 
console.log(rand({}))

