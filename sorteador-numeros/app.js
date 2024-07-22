function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

        // Verificar se os valores são válidos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || de > ate) {
     alert("Por favor, insira valores válidos.");
     return;
     }

    let sorteados = [];
    let numero;
  
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    alert(sorteados);
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
