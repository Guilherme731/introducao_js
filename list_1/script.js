/*
//Exercício 1
function ePar(number){
    if(number % 2 === 0){
        console.log('Par');
    }else{
        console.log('Ímpar');
    }
}

ePar(parseInt(prompt('Digite um número')));

//Exercício 2
function calcular(numero1, numero2){
    let adicao = parseFloat(numero1) + parseFloat(numero2);
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    return `adição: ${adicao} subtração: ${subtracao} multiplicação: ${multiplicacao} divisão: ${divisao}`;
}

console.log(calcular(prompt('digite o número 1'), prompt('digite o número 2')));

//Exercício 3
let numero = 10;
while(numero >= 1){
    console.log(numero);
    numero--;
}

//Exercício 4
function inverterTexto(texto){
    textoInvertido = '';
    for(let i = texto.length - 1; i >= 0; i--){
        textoInvertido = textoInvertido + texto[i];
    }
    return textoInvertido;
}

console.log(inverterTexto(prompt('Digite um texto')));

//Exercício 5
function contarCaracteres(texto){
    return texto.length;
}

console.log('Esse texto contém ' + contarCaracteres(prompt('Digite um texto')) + ' caracteres');

//Exercício 6
let carro = {
    marca: 'Hyundai',
    modelo: 'Santa Fé',
    ano: '2012'
}

console.log(carro.modelo);

//Exercício 7
function mensagemPersonalizada(nome, mensagem){
    if(mensagem === null || mensagem === ''){
        mensagem = 'Olá';
    }
    console.log(mensagem + ' ' + nome);
}

mensagemPersonalizada(prompt('Digite um nome'), prompt('Digite uma mensagem'));

//Exercício 8

function media(numero1, numero2, numero3){
    return (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3)) / 3;
}

console.log('A média é ' + media(prompt('Digite o número 1'), prompt('Digite o número 2'), prompt('Digite o número 3')));

//Exercício 9
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        console.log( i + ' é múltiplo de 3');
    }else{
        console.log(i + ' não é múltiplo de 3');
    }
    
}
*/