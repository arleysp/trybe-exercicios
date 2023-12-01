// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00

const precosLoja = (precoProduto) => {
    let descontoAVista = (precoProduto * 10 / 100);
    let precoAVista = precoProduto - descontoAVista; 
    let parcelaTresVezes = precoProduto / 3;
    console.log(`Preço: R$${precoProduto},00`);
    console.log(`À vista: R$${precoAVista},00`);
    console.log(`Ou 3x de: R$${parcelaTresVezes},00`);
}

console.log(precosLoja(1200))





