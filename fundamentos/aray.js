const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // 7.7 e 9.2

console.log(valores[4]) // indefinido

valores[4] = 10
console.log(valores) // aqui será mostrado o array original mais o valor '10' que foi atribuido a posição 4 que antes nao existia

valores[10] = 32
console.log(valores) // vai mostrar que exitem valores vazios entre a posição 4 e a posição 10

console.log(valores.length) // usamos o length para descobrir o tamanho/quantos elementos estão no array


// podemos adicionar valores de diferentes tipos em um mesmo array, sendo o recomendado ter um array para cada tipo de variável 
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// excluindo valores de um array
delete valores[0]
console.log(valores)

console.log(valores.pop()) // retira o ultimo elemento do array e retorna ele

console.log(typeof valores) // em JS arrays são objetos 