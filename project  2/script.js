const canvas =document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.Height = 700;
let gameSpeed = 4;
//let gameFrame = 0;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

window.addEventListener('load', function(){
    const slider = document.getElementById('slider');
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;
    slider.addEventListener('change', function(e){
       gameSpeed = e.target.value;
       showGameSpeed.innerHTML = e.target.value;
});

class layer {
    constructor(Image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width){
            this.x = 0;
        }
        this.x = this.x - this.speed;
        //this.x = gameSpeed = this.speedn    % this.width; 
    }
    draw(){
         ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
         ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
    }
}

const layer1 = new layer(backgroundLayer1, 0.5);
const layer2 = new layer(backgroundLayer2, 0.5);
const layer3 = new layer(backgroundLayer3, 0.5);
const layer4 = new layer(backgroundLayer4, 0.5);
const layer5 = new layer(backgroundLayer5, 0.5);

const gameObjects = [layer1, layer2 ,layer3 ,layer4 ,layer5];

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });
    //gameFrame--;
    requestAnimationFrame(animate);
};
animate();
});

