class Sprite {
   constructor(options) {
       this.ctx = options.ctx;

       this.image = options.image;

       this.frameIndex = 0;
       this.tickCount = 0;
       this.ticksPerFrame = options.ticksPerFrame || 0;
       this.numberOfFrames = options.numberOfFrames || 1;

       this.width = options.width;
       this.height = options.height;

       this.x = options.x || 0;
       this.y = options.y || 0;

       this.start();
   }

   update() {
       this.tickCount++;

       if (this.tickCount > this.ticksPerFrame) {
           this.tickCount = 0;
           if (this.frameIndex < this.numberOfFrames - 1) {
               this.frameIndex++;
           } else {
               this.frameIndex = 0;
           }
       }
   }

   render() {
       this.ctx.clearRect(this.x, this.y, this.width / this.numberOfFrames, this.height);
       this.ctx.drawImage(
           this.image,
           this.frameIndex * this.width / this.numberOfFrames,
           0,
           this.width / this.numberOfFrames,
           this.height,
           this.x,
           this.y,
           this.width / this.numberOfFrames,
           this.height
       )
   }

   start() {
       let loop = () => {
           this.update();
           this.render();

           window.requestAnimationFrame(loop);
       }

       window.requestAnimationFrame(loop);
   }
}

let canvas = document.querySelector(".canvas");
canvas.width = 600;
canvas.height = 200;

let coinImage = new Image();
coinImage.src = './img/coins.png';
let coin = new Sprite({
 ctx: canvas.getContext('2d'),
 image: coinImage,
 width: 440,
 height: 40,
 numberOfFrames: 11,
 ticksPerFrame: 5,
 x: 100,
 y: 70,
})


let girlImage = new Image();
girlImage.src = './img/girl.png';
let girl = new Sprite({
   ctx: canvas.getContext('2d'),
   image: girlImage,
   width: 265,
   height: 92,
   numberOfFrames: 5,
   ticksPerFrame: 10,
   x: 200,
   y: 50,
})


let planetImage = new Image();
planetImage.src = './img/planet.png';
let planet = new Sprite({
   ctx: canvas.getContext('2d'),
   image: planetImage,
   width: 24000,
   height: 184,
   numberOfFrames: 150,
   ticksPerFrame: 5,
   x: 300,
   y: 10,
})
