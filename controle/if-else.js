const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10) // aprovado
imprimirResultado(6) // reprovado 