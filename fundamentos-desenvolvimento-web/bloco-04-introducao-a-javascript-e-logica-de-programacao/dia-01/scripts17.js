const salarioBruto = 3000;
let salarioBase = 0;
let salarioLiquido = 0;

let descontoInss = 0;
let descontoIR = 0;

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
    descontoInss = 0.08;
    salarioBase = salarioBruto - (salarioBruto * descontoInss);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = 0.09;
    salarioBase = salarioBruto - (salarioBruto * descontoInss);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = 0.11;
    salarioBase = salarioBruto - (salarioBruto * descontoInss);
}
else if (salarioBruto >= 5189.83) {
    descontoInss = 570.88;
    salarioBase = salarioBruto - descontoInss;
}

else {
    console.log("Erro! Salario Bruto inserido negativo!");
}

if (salarioBase <= 1903.98) {
    descontoIR = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    descontoIR = (salarioBase * 0.075) - 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    descontoIR = (salarioBase * 0.15) - 354.80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    descontoIR = (salarioBase * 0.225) - 636.13; 
}
else {
    descontoIR = (salarioBase * 0.275) - 869,36;
}
salarioLiquido = salarioBase - descontoIR;

console.log("O salario líquido é: ", salarioLiquido, " reais.");

// Tudo certo!