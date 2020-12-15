const imprimirResultado = function(nota){
    switch (Math.floor(nota)) { // arredonda a nota 
        case 10: // como não tem comandos aqui, o próximo é executado 
        case 9:
            console.log('Quadro de honra!')
            // fazendo o uso do break, os outros comandos que estiverem abaixo dentro do switch, não serão executados
            break 
        case 8: case 7: // podemos colocar na mesma linha ou fazer igual foi feito no case 9 e 10
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
    console.log('Fim')
}

imprimirResultado(10)
//imprimirResultado(8.9)
//imprimirResultado(6.55)
//imprimirResultado(2.3)
//imprimirResultado(-1)
//imprimirResultado(11)