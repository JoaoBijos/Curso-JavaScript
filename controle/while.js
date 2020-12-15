// estrutura de repetição recomendada para quando não se sabe quantas vezes será necessário repetir o código 

function getInteiroAleatoriaEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatoriaEntre(-1, 10) // opcao vai ficar recebendo números aleatorios até receber o número -1
    console.log(opcao)
}

console.log('Finalizando')