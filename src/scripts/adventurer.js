const adventurerSprite = new Image();
adventurerSprite.src = "adventurer.png"
const adventurerSpriteMirror = new Image();
adventurerSpriteMirror.src = "adventurer-mirror.png"
let actions = ["left", "right"];

class Adventurer {
  constructor(game) {
    this.hostile = false;
    this.width = 32;
    this.height = 33;
    this.frameX = 0;
    this.frameY = 1;
    this.speed = (Math.random() * 10) + 10;
    this.direction = actions[Math.floor(Math.random() * actions.length)]
    this.y = game.randomPosition()[1]
    if (this.direction === "right") {
      this.flipped = true;
      this.x = 0;
    }
    else {
      this.flipped = false;
      this.x = game.DIM_X;
    }
    this.sizeX = 80;
    this.sizeY = 80;
  }

  draw(ctx) {
    if (this.direction === "right") {
      ctx.drawImage(adventurerSprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.sizeX, this.sizeY);
    }
    else {
      ctx.drawImage(adventurerSpriteMirror, this.width * (this.frameX+5), this.height * this.frameY, this.width, this.height, this.x, this.y, this.sizeX, this.sizeY);
    }
  }

  move() {
    if (this.direction === "right") {
      this.x += this.speed;
    }
    else {
      this.x -= this.speed;
    }

    if (this.frameX <= 6) {
      this.frameX ++
    } 
    else {
      this.frameX = 0
    }
  }


}

module.exports = Adventurer;