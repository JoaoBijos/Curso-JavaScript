const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log('i = ',i)
    })
}

funcs[2]()
funcs[8]()

// a variavel nao tem escopo de bloco 