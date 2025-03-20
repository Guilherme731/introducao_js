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
    let adicao = parseInt(numero1) + parseInt(numero2);
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

*/
//Exercício 8