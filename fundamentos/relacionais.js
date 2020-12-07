// igual, ou diferente 
// == leva em consideração o valor
// === leva em consideração o tipo também 

console.log('01)', '1' == 1) // true pois está comparando os valores 

console.log('02)', '1' === 1) // false pois um vai ser string e o outro numero 

console.log('03)', '3' != 3) // falso pois o valor é igual

console.log('04)', '3' !== 3) // true pois um é string e o outro é valor 


// maior, menor, menor igual ou maior igual 

console.log('05)', 3 < 2 ) // false

console.log('06)', 3 > 2 ) // true  

console.log('07)', 3 <= 2 ) //false

console.log('08)', 3 >= 2 ) // true 



const d1 = new Date(0) // data de referencia do JS 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2 ) // compara endereco de memoria 
console.log('10)', d1 == d2 )

console.log('11)', d1.getTime() === d2.getTime()) // true, mesmo tipo e valor


console.log('12)', undefined == null ) // true 
console.log('12)', undefined == null ) // false 