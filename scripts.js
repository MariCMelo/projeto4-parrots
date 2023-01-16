/* // cartas
const cartasArray = [
    {
        nome: 'bobRoss',
        img: 'imagens/bobrossparrot.gif'
    },
    {
        nome: 'bobRoss',
        img: 'imagens/bobrossparrot.gif'
    },
    {
        nome: 'explodyParrot',
        img: 'imagens/explodyparrot.gif'
    },
    {
        nome: 'explodyParrot',
        img: 'imagens/explodyparrot.gif'
    },
    {
        nome: 'fiestaParrot',
        img: 'imagens/piestaparrot.gif'
    },
    {
        nome: 'fiestaParrot',
        img: 'imagens/piestaparrot.gif'
    },
    {
        nome: 'metalParrot',
        img: 'imagens/metalparrot.gif'
    },
    {
        nome: 'metalParrot',
        img: 'imagens/metalparrot.gif'
    },
    {
        nome: 'revertitParrot',
        img: 'imagens/revertitparrot.gif'
    },
    {
        nome: 'revertitParrot',
        img: 'imagens/revertitparrot.gif'
    },
    {
        nome: 'tripletsParrot',
        img: 'imagens/tripletsparrot.gif'
    },
    {
        nome: 'tripletsParrot',
        img: 'imagens/tripletsparrot.gif'
    },
    {
        nome: 'unicornParrot',
        img: 'imagens/unicornparrot.gif'
    },
    {
        nome: 'unicornParrot',
        img: 'imagens/unicornparrot.gif'
    },
] */

const baralho = document.querySelector('.baralho');{

    function jogo();{
        for (let i = 0; i < cartasArray.length; i++);
    }
}

//dar as cartas perguntar no prompt
let darCartas = prompt ("Com quantas cartas quer Jogar?");
while (darCartas / 2 != 0 && (darCartas >= 4 && darCartas <= 14));{
    perguntarNovamente (darCartas);
    darCartas = prompt ("Com quantas cartas quer Jogar?"); 
}

//girar cartas

const cartas = document.querySelectorAll('.baralho');

function flipCard() {
  this.classList.toggle('girar');
}

cartas.forEach(carta => carta.addEventListener('click', flipCard));








 //embaralhar
 minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}