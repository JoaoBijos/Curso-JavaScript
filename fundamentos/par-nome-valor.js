// par nome/valor
const saudacao = 'Olá!' // contexto léxico 1 - local onde sua váriavel foi definida de maneira fisíca no seu código

function exec() {
    const saudacao = 'Aoba' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Mamede Silva',
        numero: 2830
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)