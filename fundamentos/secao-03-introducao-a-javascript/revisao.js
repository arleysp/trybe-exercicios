// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

const jantar = (valorJantar) => {
    let taxaDoGarçom = valorJantar * 10 / 100
    let total = valorJantar + taxaDoGarçom
    console.log(`Total a pagar: ${total}`)
}





jantar(1000)




