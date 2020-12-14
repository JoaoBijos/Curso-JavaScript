function teste1(num){
    if(num > 7)
        console.log(num) // quando se trata apenas de uma sentença de código a ser executada, não precisa de {}
    
    console.log(`final`)
}


// teste1(6) // vai mostrar somente o 'final'
// teste1(8) // vai mostrar o 8 e 'final' 


function teste2(num) {
    // o ; termina o bloco do if, ou seja, o console.log não está associado a ele 
    // de maneira que o 6 e 8 o vão ser mostrados no console.
    if(num > 7); { 
        console.log(num)
    }
}

teste2(6)
teste2(8)