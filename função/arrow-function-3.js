let comparaComThis = function(param) {
    console.log(this == param)
}

comparaComThis(global) // no runtime do node this será global


const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true


let comparaComThisArrow  = param => console.log(this === param)
comparaComThisArrow(global) // não aponta pro global pois foi escrito em uma Arrow function 
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // a arrow function é mais forte do que o bind, sendo assim o bind não consegue alterar nada
comparaComThisArrow(module.exports) // true 

// o this fica ligado com o contexto em que ele foi escrito, e isso não mudará 