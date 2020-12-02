const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log('i = ',i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

// com o uso do let já conseguimos retornar os valores desejados, 
// pois com ele existe um espaço na memória para cada valor