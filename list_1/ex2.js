function calcular(numero1, numero2){
    let adicao = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    return `adição: ${adicao} subtração: ${subtracao} multiplicação: ${multiplicacao} divisão: ${divisao}`;
}

console.log(calcular(20, 15));