//Exercício 11
function ex11() {
    function verificarSinal(numero) {
        if (numero > 0) {
            //caso positivo...
            console.log('Positivo');
        } else if (numero < 0) {
            //caso negativo...
            console.log('Negativo');
        } else if (numero === 0) {
            //caso 0...
            console.log('Zero');
        } else {
            //Caso nenhum dos anteriores
            console.log('Valor inválido');
        }
    }

    verificarSinal(parseFloat(prompt('Digite um número')));
}

//Exercício 12
function ex12() {
    function converterTemperatura(celsius) {
        return celsius * 9 / 5 + 32;
    }

    console.log('A temperatura em Fahreheit é ' + converterTemperatura(parseFloat(prompt('Qual a temperatura em Celsius?'))));
}

//Exercício 13
function ex13() {
    let n = 1;
    let total = 0;
    while (n <= 100) {
        total += n; // Adiciona n ao total
        n++; //Incrementa n
    }
    console.log('A soma dos números de 1 a 100 é ' + total);
}

//Exercício 14
function ex14() {
    function substituirPalavra(frase) {
        let novaFrase = '';
        //Divide a frase por espaços e, em cada palavra...
        frase.split(' ').forEach(palavra => {
            //Verifica se a palavra é 'azul', se for, muda para 'vermelho'
            if (palavra === 'azul') {
                palavra = 'vermelho';
            }
            //Adiciona a palvra na nova frase
            novaFrase = novaFrase + ' ' + palavra;
        });
        console.log(novaFrase);
    }

    substituirPalavra(prompt('Digite uma frase'));
}

//Exercício 15
function ex15() {
    function verificarTamanho(frase) {
        if (frase.length > 10) {
            console.log('A frase tem mais de 10 caracteres');
        } else {
            console.log('A frase não tem mais de 10 caracteres');
        }
    }

    verificarTamanho(prompt('Digite uma frase'));
}

//Exercício 16
function ex16() {
    let frutas = ['maçã', 'banana', 'laranja', 'pera', 'tangerina'];
    console.log(frutas[2]);
}

//Exercício 17
function ex17() {
    function saudacao(nome, saudacao) {
        if (saudacao === null || saudacao === '') {
            saudacao = 'Bem-vindo(a)';
        }

        return saudacao + ' ' + nome;
    }

    console.log(saudacao(prompt('Digite um nome'), prompt('Digite uma saudação')));
}

//Exercício 18
function ex18() {
    function verificarAprovacao(nota) {
        if (nota >= 6) {
            console.log('Aprovado');
        } else {
            console.log('Reprovado');
        }
    }

    verificarAprovacao(parseFloat(prompt('Digite sua nota')));
}

//Exercício 19
function ex19() {
    for (let i = 0; i <= 30; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

//Exercício 20
function ex20() {
    function contarVogais(palavra) {
        let qtdVogais = 0;
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] == 'a' || palavra[i] == 'A' || palavra[i] == 'e' || palavra[i] == 'E' || palavra[i] == 'i' || palavra[i] == 'I' || palavra[i] == 'o' || palavra[i] == 'O' || palavra[i] == 'u' || palavra[i] == 'U'){
                qtdVogais++;
            }
        }
        return qtdVogais;
    }

    console.log('A palavra possui ' + contarVogais(prompt('Digite uma palavra')) + ' vogais');
}

//Exercício 21
function ex21(){
    function somarArray(array){
        let soma = 0;
        array.forEach(numero =>{
            soma += numero;
        });
        return soma;
    }

    let arrayParaSomar = [];
    arrayParaSomar[0] = parseFloat(prompt('Digite o número 1'));
    arrayParaSomar[1] = parseFloat(prompt('Digite o número 2'));
    arrayParaSomar[2] = parseFloat(prompt('Digite o número 3'));
    console.log('A soma do array é ' + somarArray(arrayParaSomar));
}

//Exercício 22
function ex22(){
    function dobrarNumero(numero){
        return numero * 2;
    }

    console.log('O dobro é ' + dobrarNumero(parseFloat(prompt('Digite um número'))));
}

//Exercício 23
function ex23(){
    let n = 2;
    while(n <= 20){
        if(n % 2 === 0){
            console.log(n);
        }
        n++;
    }
}

//Exercício 24
function ex24(){
    function capitalizar(texto){

        let novo = texto[0].toUpperCase();
        return novo;
    }

    console.log(capitalizar(prompt('Digite um texto para capitalizar')));
}