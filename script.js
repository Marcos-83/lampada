// const turnOn = document.getElementById('turnOn');
// const turnOff = document.getElementById('turnOff');
const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');
const trocar = document.getElementById('trocar')

function estaQuebrada() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if(!estaQuebrada()) {
    lamp.src = './img/ligada.jpg';
}
}

function lampOff() {
    if(!estaQuebrada()) {
    lamp.src = './img/desligada.jpg';
}
}
// função para deixar apenas um botão e fazer a troca de quando for acionado
function lampOnOff() {
    if(turnOnOff.textContent == 'Ligar' && !estaQuebrada()) {
        lampOn();
        turnOnOff.textContent = 'Desligar';        
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

function lampQuebrada() {
    lamp.src = './img/quebrada.jpg';
}

function lampNova() {
    if(estaQuebrada()) {
    lamp.src = './img/desligada.jpg';
}
}

// turnOn.addEventListener('click', lampOn);
// turnOff.addEventListener('click', lampOff);
turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('dblclick', lampQuebrada);
trocar.addEventListener('click', lampNova);
