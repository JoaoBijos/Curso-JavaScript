Number.prototype.entre = function (inicio, final) {
    return this >= inicio && this <= final
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)){
        console.log('Aprovado, Quadro de Honra !')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado, parabéns!')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }

    console.log('Finalizando')
}

imprimirResultado(9.5)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(11)