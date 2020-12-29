let dobro = function(a) {
    return 2 * a
}

dobro = (a) => { // fazendo o uso da arrow function, a seta '=>' substitui a palabra function
    return 2 * a
}

// quando temos somente um parametro, podemos tirar os ()
dobro = a => 2 * a // return está implícito 

console.log(dobro(Math.PI))




let ola = function() {
    return 'Olá!'
}

ola = () => 'Olá!'
console.log(ola())