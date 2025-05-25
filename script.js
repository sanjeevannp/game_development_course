const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let franeX = 0;
let franeY = 4;
let gameFrame = 0;
const staggerFrames = 5;
const spritAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    }
]
animationStates.forEach((state , index) => { 
    let frames = {
        loc: [],
    }
    for (let j = 0; j <state.frames; s++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
    }
});

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    ctx.drawImage(playerImage, franeX, franeY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();