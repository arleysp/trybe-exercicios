let salarioBruto = 4500
let INSS;
let impR
if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 8 / 100;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    INSS = salarioBruto * 9 / 100;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.92) {
    INSS = salarioBruto * 11 / 100;
} else {
    INSS = 570.88;
}
let salarioBase = salarioBruto - INSS;

if (salarioBase <= 1903.98) {
    impR = 0
} else if (salarioBase >= 1993,99 && salarioBase <= 2826.65) {
    impR = (salarioBase * 7.5 / 100) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impR = (salarioBase * 15 / 100) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impR = (salarioBase * 22,5 / 100) - 636.13;
} else {
    impR = (salarioBase * 0.275) - 869.36;
  };
  
;

console.log('Salário líquido = R$' + (salarioBase - impR))