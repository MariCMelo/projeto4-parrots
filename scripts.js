//dar as cartas perguntar no prompt
console.log("entrou aqui");
let numeroCartas = prompt("Com quantas cartas quer Jogar? (Valor par, de 4 a 14)");
numeroCartas = parseInt(numeroCartas);

let podeJogar = false;
while(!podeJogar) {
    if ((numeroCartas % 2 === 0) && (numeroCartas >= 4 && numeroCartas <= 14) && (numeroCartas !== null)) {
        podeJogar = true
    }
    else {
        numeroCartas = prompt("Com quantas cartas quer Jogar? (Valor par, de 4 a 14)");
        numeroCartas = parseInt(numeroCartas);
    }
}

//cartas
let imagensFrente = [
    `"imagens/bobrossparrot.gif"`,
    `"imagens/explodyparrot.gif"`,
    `"imagens/fiestaparrot.gif"`,
    `"imagens/metalparrot.gif"`,
    `"imagens/revertitparrot.gif"`,
    `"imagens/tripletsparrot.gif"`,
    `"imagens/unicornparrot.gif"`];

let cartas = document.querySelector(".baralho");

//escolher cartas
let escolhas = [];
for (let i = 0; i < numeroCartas / 2; i++) {
    let numeroEscolhido = Math.floor(Math.random() * 7);
    while(escolhas.includes(numeroEscolhido)){
       numeroEscolhido = Math.floor(Math.random() * 7);
    }
    escolhas.push(numeroEscolhido);
    escolhas.push(numeroEscolhido);
}

//embaralhar
 function comparador() {
        return Math.random() - 0.5;
    }
    
function selecionarCarta(cartaSelecionada){
  
}

escolhas.sort(comparador);
console.log(escolhas);
for(let i = 0; i<escolhas.length; i++){
    console.log(i);
    console.log(imagensFrente[i]);

    
cartas.innerHTML = cartas.innerHTML + `<div class="carta" onclick="virar-carta(this)"> 

    <div><img class=" frente face-frente" src="imagens/back.png"></div>
    
    <div><img class="frente face-verso" src=${imagensFrente[escolhas[i]]}></div>
</div>
    `;
}


