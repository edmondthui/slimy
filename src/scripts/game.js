const slimeSprite = new Image();
slimeSprite.src = "slime.png"
const background = new Image();
background.src = "dungeon.png"


class Game {
  constructor(DIM_X, DIM_Y){
    this.keys = [];
    this.DIM_X = DIM_X,
    this.DIM_Y = DIM_Y
    this.slime =  {
      x: 50,
      y: 50,
      width: 31,
      height: 21,
      frameX: 0,
      frameY: 0,
      speed: 5,
      moving: false,
      sizeX: 64,
      sizeY: 26,
      flipped: false
    }

    window.addEventListener("keydown", (e) => {
      this.keys.push(e.key)
    })
    
    window.addEventListener("keyup", (e) => {
      this.keys = this.keys.filter((x) => x !== e.key)
      this.slime.moving = false;
    })
  }
  
  randomPosition() {
    return [(Math.random() * this.DIM_X), (Math.random() * this.DIM_Y)];
  }

  draw(ctx) {
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y)
    ctx.drawImage(background, 0, 0, this.DIM_X, this.DIM_Y);
    this.movePlayer();
    this.handleAnimation();
    if (!this.slime.flipped) {
      ctx.drawImage(slimeSprite, this.slime.width * this.slime.frameX, this.slime.height * this.slime.frameY, this.slime.width, this.slime.height, this.slime.x, this.slime.y, this.slime.sizeX, this.slime.sizeY);
    } 
    else {
      ctx.scale(-1, 1);
      ctx.drawImage(slimeSprite, this.slime.width * this.slime.frameX, this.slime.height * this.slime.frameY, this.slime.width, this.slime.height, -this.slime.width-this.slime.x, this.slime.y, this.slime.sizeX, this.slime.sizeY);
      ctx.scale(-1, 1);
    }
  } 

  movePlayer() {
    if (this.keys.includes("w") && this.slime.y > 0) {
      this.slime.y -= this.slime.speed;
      this.slime.moving = true;
    }
    if (this.keys.includes("a") && this.slime.x > 0) {
      this.slime.x -= this.slime.speed;
      this.slime.moving = true;
      this.slime.flipped= false;
    }
    if (this.keys.includes("s") && this.slime.y < this.DIM_Y - 20) {
      this.slime.y += this.slime.speed;
      this.slime.moving = true;
    }
    if (this.keys.includes("d") && this.slime.x < this.DIM_X - 20) {
      this.slime.x += this.slime.speed;
      this.slime.moving = true;
      this.slime.flipped = true;
    }

  }

  handleAnimation() {
    if (this.slime.frameX <= 9 && !this.slime.moving) {
      this.slime.frameY = 0;
      this.slime.frameX++
    } 
    else if (this.slime.frameX <= 5 && this.slime.moving) {
      this.slime.frameY = 1
      this.slime.frameX++
    }
    else {
      this.slime.frameX = 0
    }
  }


}
module.exports = Game;