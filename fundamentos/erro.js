function tratarErro(erro){
    // throw new Error('* * ERRO * *') -- pode se fazer dessa forma, gerando um novo erro 
    
    // ou podemos retornar qualquer coisa, objetos, numeros, string, boolean...

    // throw 10 
    // throw true
    // throw 'ERRO'
    throw { // throw retorna alguma coisa segundo o erro 
        nome: erro.nome,
        msg: erro.msg,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // o try indentifica o erro 
        console.log(obj.name.toUpperCase() + '!!!') // aqui existe um erro
    } catch (e) { // o catch captura o erro 
        tratarErro(e) // envia o erro para uma função 
    } finally {
        // finally é executado por último, ocorrendo erro ou não. 
        // Se tiver o erro ele aparece antes do erro, caso contrario aparece só depois
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)