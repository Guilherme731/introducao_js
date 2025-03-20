console.log(inverterTexto(prompt("Digite um texto")))

function inverterTexto(texto){
    textoInvertido = '';
    for(let i = texto.length - 1; i >= 0; i--){
        textoInvertido = textoInvertido + texto[i];
    }
    return textoInvertido;
}