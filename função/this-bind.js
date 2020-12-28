const pessoa = {
    saudacao : 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}


pessoa.falar()
const falar = pessoa.falar
falar() // undefined

const falarDePessoa = pessoa.falar.bind(pessoa) // bind diz pra onde a função deve apontar 
falarDePessoa()