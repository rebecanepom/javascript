let semaforo = document.querySelector('div#semaforo')
let img = document.querySelector('#imagem')
let red = document.querySelector('button#red')
let yellow = document.querySelector('button#yellow')
let green = document.querySelector('button#green')
let auto = document.querySelector('button#auto')

red.addEventListener('click', luzRed)
yellow.addEventListener('click', luzYellow)
green.addEventListener('click', luzGreen)
auto.addEventListener('click', luzes)

function luzRed() {
    img.setAttribute('src', 'imagens/semaforo-red.png')
}

function luzYellow() {
    img.setAttribute('src', 'imagens/semaforo-yellow.png')
}

function luzGreen() {
    img.setAttribute('src', 'imagens/semaforo-green.png')
}

function luzes() {
    
}