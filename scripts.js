//dar as cartas perguntar no prompt
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
 
let escolha1 = null;
let escolha2 = null;
let indicesEscolhas = [];
 
// virar cartas que nao deram match
function virarCartas(indicesEscolhas) {
    todasCartas = document.getElementsByClassName('carta');
 
    for(let i=0; i < indicesEscolhas.length; i++) {
        todasCartas[indicesEscolhas[i]].classList.remove('virar-carta');
    }
}
 
// virar uma carta e apos as duas estarem viradas, analisa se sao iguais
function selecionarCarta(cartaSelecionada){
  cartaSelecionada.classList.add("virar-carta");
  nomeCarta = cartaSelecionada.querySelector('.face-verso').src;
  nomeCarta = nomeCarta.split("/").slice(-1).pop();
  
  if(escolha1 !== null) {
    escolha2 = nomeCarta;
    escolha2Index = cartaSelecionada.parentNode;
  }
  else {
    escolha1 = nomeCarta;
    escolha1Index = cartaSelecionada.parentNode;
  }
 
  if (escolha1 !== null && escolha2 !== null) {
    if(escolha1 !== escolha2) {
        todasCartas = document.getElementsByClassName('carta');
        for(let i=0; i < todasCartas.length; i++) {
            if(todasCartas[i].className.includes('virar-carta') && !todasCartas[i].className.includes('acertou')) {
                indicesEscolhas.push(i);
            }
        }
        setTimeout(virarCartas, 1000, indicesEscolhas);
      }
 
    if(escolha1 === escolha2) {
        todasCartas = document.getElementsByClassName('carta');
        for(let i=0; i < todasCartas.length; i++) {
            if(todasCartas[i].className.includes('virar-carta')) {
                todasCartas[i].classList.add('acertou');
            }
        }
        indicesEscolhas = [];
    }
 
     escolha1 = null;
     escolha2 = null;
 
  }
 
}
 
escolhas.sort(comparador);
for(let i = 0; i<escolhas.length; i++){
 
cartas.innerHTML = cartas.innerHTML + `<div class="carta" onclick="selecionarCarta(this)"> 
 
    <div><img class=" frente face-frente" src="imagens/back.png"></div>
    
    <div><img class="frente face-verso" src=${imagensFrente[escolhas[i]]}></div>
</div>
    `;
}