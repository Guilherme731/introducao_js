function calcular(numero1, numero2){
    let adicao = parseInt(numero1) + parseInt(numero2);
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    return `adição: ${adicao} subtração: ${subtracao} multiplicação: ${multiplicacao} divisão: ${divisao}`;
}

console.log(calcular(prompt('digite o número 1'), prompt('digite o número 2')));