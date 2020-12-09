const Spider = require("./spider.js")
const slimeSprite = new Image();
slimeSprite.src = "slime.png"
const background = new Image();
background.src = "dungeon.png"


class Game {
  constructor(DIM_X, DIM_Y){
    this.numCharacters = 30
    this.characters = [];
    this.keys = [];
    this.DIM_X = DIM_X,
    this.DIM_Y = DIM_Y
    this.slime =  {
      width: 31,
      height: 21,
      x: this.randomPosition()[0],
      y: this.randomPosition()[1],
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

    this.addEnemies();
  }

  addEnemies() {
    if (this.characters.length < this.numCharacters) {
      for (let i = this.characters.length ; i < this.numCharacters; i++) {
        this.characters.push(new Spider(this))
      }
    }
  }
  
  randomPosition() {
    return [(Math.random() * this.DIM_X- 30), (Math.random() * this.DIM_Y- 20)];
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
    this.characters.forEach(enemy => enemy.draw(ctx))
  } 

  moveEnemies() {
    this.characters.forEach(enemy => enemy.move())
  }

  step() {
    //this.checkCollisions();
    this.moveEnemies();
    this.addEnemies();
    this.removeEnemies();
  }

  removeEnemies() {
    this.characters.forEach((enemy,idx) => {
      if (enemy.x < 0 || enemy.x > this.DIM_X) {
        this.characters.splice(idx, 1)
      }
    })
  }

  movePlayer() {
    if ((this.keys.includes("w") || this.keys.includes("ArrowUp")) && this.slime.y > 0) {
      this.slime.y -= this.slime.speed;
      this.slime.moving = true;
    }
    if ((this.keys.includes("a") || this.keys.includes("ArrowLeft"))  && this.slime.x > 0) {
      this.slime.x -= this.slime.speed;
      this.slime.moving = true;
      this.slime.flipped= false;
    }
    if ((this.keys.includes("s") || this.keys.includes("ArrowDown"))  && this.slime.y < this.DIM_Y - 20) {
      this.slime.y += this.slime.speed;
      this.slime.moving = true;
    }
    if ((this.keys.includes("d") || this.keys.includes("ArrowRight"))  && this.slime.x < this.DIM_X - 20) {
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