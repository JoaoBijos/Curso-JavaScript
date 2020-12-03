console.log(typeof console) // console é um objeto 

console.log(Math.ceil(6.1)) // arredonda o número 

const obj1 = {}

// as duas maneiras de escrever são equivalentes 
obj1.nome = 'Bola' 
// obj1['nome'] = 'Bola2' - aqui o nome seria sobreposto 

console.log(obj1)

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}


const obj2= new Obj('Cadeira') // chama a função declarada como Obj e passa 'Cadeira' como parametro
const obj3= new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec() 