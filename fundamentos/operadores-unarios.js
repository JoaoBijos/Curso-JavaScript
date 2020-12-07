let num1 = 1
let num2 = 2

num1 ++ // pós fixada, adiciona um ao valor da variavel 
console.log(num1)

--num1 // pré fixada, retira um do valor da variavel 
console.log(num1)


console.log(++num1 === num2--) // true, pois só vai subtrair do num2 depois da comparação, por ser pós fixada
console.log(num1 === num2) // false, pois aqui ja foi adicionado e tirado os valores 