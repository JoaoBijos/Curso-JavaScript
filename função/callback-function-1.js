const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

// o forEach faz com que para da elemento encontrado em 'fabricantes', a função 'imprimir' seja executada
fabricantes.forEach(imprimir) 
fabricantes.forEach(fabricante => console.log(fabricante))