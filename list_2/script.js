//Exercício 11
function ex11(){
    function verificarSinal(numero){
        if(numero > 0){
            //caso positivo...
            console.log('Positivo');
        }else if(numero < 0){
            //caso negativo...
            console.log('Negativo');
        }else if(numero === 0){
            //caso 0...
            console.log('Zero');
        }else{
            //Caso nenhum dos anteriores
            console.log('Valor inválido');
        }
    }

    verificarSinal(parseFloat(prompt('Digite um número')));
}

//Exercício 12
function ex12(){
    function converterTemperatura(celsius){
        return celsius * 9/5 + 32;
    }

    console.log('A temperatura em Fahreheit é ' + converterTemperatura(parseFloat(prompt('Qual a temperatura em Celsius?'))))
}