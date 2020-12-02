console.log(typeof Object) // o tipo do objeto é uma função 
console.log(typeof new Object()) // aqui já se torna um objeto 


const cliente =  function() {}
console.log(typeof cliente) // aqui será do tipo função 
console.log(typeof new cliente) // aqui será um objeto


class produto {} // ES 2015 (ES6)
console.log(typeof produto) // aqui será do tipo função 
console.log(typeof new produto()) // aqui será um objeto