const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

//player 
let playerX = 480;
let playerY = 440;

const PlayerWidth = 50;
const PlayerHeight = 50;

// street lines
const lineWidth = 16;
const lineHeight = 5;

// car size
const carWidth = 70;
const carHeight = 40;

// cars position

let carFirstX = 365;
let carFirstY = 100; 

let carSecondX = 750;
let carSecondY = 165;

let carThirdX = 110;
let carThirdY = 230;

let carFourthX = 450;
let carFourthY = 295;

let carFithX = 635;
let carFifthY = 360;

var death = 0;
var lvlUp = 0;
// object contains arrow keys adress
let KEY_CODE = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
 };

function cars () {
    
    ctx.fillStyle = 'blue';
    ctx.fillRect(carFirstX, carFirstY, carWidth, carHeight)
    
    ctx.fillStyle = 'pink';
    ctx.fillRect(carSecondX, carSecondY, carWidth, carHeight)

    ctx.fillStyle = 'yellow';
    ctx.fillRect(carThirdX, carThirdY, carWidth, carHeight)

    ctx.fillStyle = 'red';
    ctx.fillRect(carFourthX, carFourthY, carWidth, carHeight)

    ctx.fillStyle = 'yellowgreen';
    ctx.fillRect(carFithX, carFifthY, carWidth, carHeight)
}

function carsPosition() {
    carFirstX += lvlUp + 1;
    if(carFirstX >= 1000) {carFirstX = -70;}
    carSecondX += lvlUp + 1;
    if(carSecondX >= 1000) {carSecondX = -70;}
    carThirdX += lvlUp + 2;
    if(carThirdX >= 1000) {carThirdX = -70;}
    carFourthX += lvlUp + 3;
    if(carFourthX >= 1000) {carFourthX = -70;}
    carFithX += lvlUp + 1;
    if(carFithX >= 1000) {carFithX = -70;}
}

function tabel() {

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cw, ch);

    ctx.fillStyle = 'green';
    ctx.fillRect( 0, 0, cw, 85);
    ctx.fillRect( 0, 415, cw, 500);

    ctx.fillStyle = 'white';
    ctx.fillRect( 0, 85, cw, lineHeight);
    ctx.fillRect( 0, 410, cw, lineHeight);

    for (let linePosition = 10; linePosition < cw; linePosition += 30) {

        ctx.fillStyle = 'white';
        ctx.fillRect(linePosition , 150, lineWidth, lineHeight);
        ctx.fillRect(linePosition , 215, lineWidth, lineHeight);
        ctx.fillRect(linePosition , 280, lineWidth, lineHeight);
        ctx.fillRect(linePosition , 345, lineWidth, lineHeight);    
    }
}

function player() {

    const img = new Image()
    img.src = "img/playerFrog.png"
    img.onload = () => {
    ctx.drawImage(img, playerX, playerY, PlayerWidth, PlayerHeight)
}
    
}

function playerPosition(event) {

    switch (event.keyCode) {
        case KEY_CODE.LEFT:
        
           playerX -= 15;
           break;
        case KEY_CODE.RIGHT:
           
           playerX += 15;
           break;
        case KEY_CODE.DOWN:
           
           playerY += 15;
           break;
        case KEY_CODE.UP:
           
           playerY -= 15;
           break;
        default:
           break;
     }

     if(playerY + PlayerHeight <= 85 && playerY >= 85 - PlayerHeight) {setTimeout(function() {restart(1)}, 1000);}
}

 
function restart(win) {

    if (win) {lvlUp++;}
    playerX = 480;
    playerY = 440;
}
function colision () {

    if ( carFithX + carWidth >= playerX && carFithX <= playerX && carFifthY + carHeight >= playerY & carFifthY <= playerY + PlayerHeight) { restart(); death++;}
    
    if ( carFourthX + carWidth >= playerX && carFourthX <= playerX && carFourthY + carHeight >= playerY & carFourthY <= playerY + PlayerHeight) {restart(); death++;}

    if ( carThirdX + carWidth >= playerX && carThirdX <= playerX && carThirdY + carHeight >= playerY & carThirdY <= playerY + PlayerHeight) {restart(); death++;}

    if ( carSecondX + carWidth >= playerX && carSecondX <= playerX && carSecondY + carHeight >= playerY & carSecondY <= playerY + PlayerHeight) {restart(); death++;}

    if ( carFirstX + carWidth >= playerX && carFirstX <= playerX && carFirstY + carHeight >= playerY & carFirstY <= playerY + PlayerHeight) {restart(); death++;}
}

function deathCounter() {

    ctx.font = "60px Georgia";
    ctx.fillText(death+': death', 740, 60);
}

function winCounter() {
    
    ctx.font = "60px Georgia";
    ctx.fillText( 'won :'+lvlUp, 60, 60);
}

let topCanvas = canvas.offsetTop;

    function game() {
        tabel();
        player(); 
        cars();
        deathCounter();
        winCounter();
        carsPosition(); 
        colision(); 
    }

window.addEventListener('keydown', playerPosition);

setInterval(game, 1000 / 60);
    


