// armazenar uma função em uma variavel 
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando uma funcao arrow em uma variavel 
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))


// retorno implicito 
const subtracao = (a, b) => a - b // como é uma funcao somente com uma linha, o código entende sozinho que deverá retornar o valor 

console.log(subtracao(6, 3))

const imprimir2 = a => console.log(a)
imprimir2('Aspira')