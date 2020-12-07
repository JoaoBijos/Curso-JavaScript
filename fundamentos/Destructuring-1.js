// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // extraindo variaveis do objeto 
console.log(nome, idade)

const {nome : n, idade : i} = pessoa 
console.log(n, i)


// exemplo de caso onde o atributo não existe dentro do objeto 
const {sobrenome, bemHumorada = true} = pessoa // atribuimos o true para casos onde o bemHumorada estiver vazio
console.log(sobrenome, bemHumorada)


// pegando os valores de logradouro e numero 
const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)