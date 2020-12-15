// estrutura de repetição recomendada para quando não se sabe quantas vezes será necessário repetir o código 

function getInteiroAleatoriaEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao = 0

do {
    opcao = getInteiroAleatoriaEntre(-1, 10)
    console.log(opcao)
} while (opcao != -1) // será executado no minimo uma vez os comandos, pois a verificação ocorre somente após o bloco 

console.log('Finalizando')