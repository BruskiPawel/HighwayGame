const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

let playerX = 480;
let playerY = 440;

let playerVXR = 0;
let playerVXL = 0;
let playerVY = 0;

const playerWidth = 45;
const playerHeight = 45;

let carX = [100];
let carsPositionY = [100, 165, 230, 295, 360, 100, 165, 230, 295, 360, 100, 165, 230, 295, 360];
let carVelocity = 0;
let carNumber = 1;
let win = 0;
let death = 0;

const carWidth = 70;
const carHeight = 40;

let cars = [];

function startCarPosition() {
    for (let i = 0; i <= cars.length; i++) {
        let randNum = parseInt(Math.random() * cw - carVelocity);
        carX.push(randNum);
    }
}

function carsRender() {

    for (let i = 0; i <= cars.length; i++) {
        const img = new Image();

        img.src = `img/car${i + 1}.png`;
        ctx.drawImage(img, carX[i] + carVelocity, carsPositionY[i], carWidth, carHeight);

        carVelocity += .5;
        if (carX[i] + carVelocity>= cw) { carX[i] = -70 - carVelocity; }
    }
}
function colision() {

    for (i = 0; i <= cars.length; i++) {
        if (carX[i] + carVelocity + carWidth >= playerX && carX[i] + carVelocity <= playerX + playerWidth && carsPositionY[i] >= playerY && carsPositionY[i] <= playerY + playerHeight) {

            playerX = 480;
            playerY = 440;
            death++;
            deathCounter();
        };
    }
}

function tabel() {

    const lineWidth = 16;
    const lineHeight = 5;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cw, ch);

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, cw, 85);
    ctx.fillRect(0, 415, cw, 500);

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 85, cw, lineHeight);
    ctx.fillRect(0, 410, cw, lineHeight);

    for (let linePosition = 10; linePosition < cw; linePosition += 30) {
        ctx.fillStyle = 'white';
        ctx.fillRect(linePosition, 150, lineWidth, lineHeight);
        ctx.fillRect(linePosition, 215, lineWidth, lineHeight);
        ctx.fillRect(linePosition, 280, lineWidth, lineHeight);
        ctx.fillRect(linePosition, 345, lineWidth, lineHeight);
    }

    winCounter();
    deathCounter();
}

function playerPosition() {

    if (playerY <= 0) { playerVY = +1; }
    if (playerY + playerHeight >= ch) { playerVY = -1; }
    if (playerX <= 0) { playerVXL = +1; }
    if (playerX + playerWidth >= cw) { playerVXR = -1; }

    playerX += playerVXL;
    playerX += playerVXR;
    playerY += playerVY;

    const img = new Image();
    img.src = "img/playerFrog.png";
    ctx.drawImage(img, playerX, playerY, playerWidth, playerHeight);

    if (playerY + playerHeight <= 85) {

        carNumber++;
        playerX = 480;
        playerY = 440;
        win++;
        
        if (cars.length <= 15) {

            cars.push(`cars${carNumber}`);
        }
        winCounter();
        startCarPosition();
    }
}

function deathCounter() {

    ctx.font = "60px Georgia";
    ctx.fillStyle = 'black';
    ctx.fillText(death + ': death', cw - 300, 60);
}

function winCounter() {

    ctx.font = "60px Georgia";
    ctx.fillStyle = 'black';
    ctx.fillText('won :' + win, 60, 60);
}

function animate() {

    ctx.clearRect(0, 0, cw, ch);
    tabel();
    carsRender();
    playerPosition();
    colision();
    requestAnimationFrame(animate);
}


