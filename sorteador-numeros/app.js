function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

        // Verificar se os valores são válidos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || de > ate) {
     alert("Por favor, insira valores válidos.");
     return;
     }

    let sorteados = [];
    let numero;
x   
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    alert(sorteados);
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
