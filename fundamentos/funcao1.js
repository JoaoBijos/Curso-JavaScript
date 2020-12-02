// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // chama a função e passa os parametros


// Função com retorno 
function soma(a, b = 0){ // com isso, se nenhum valor for passado para B, ele será 0
    return a + b
}

console.log(soma(2, 4))