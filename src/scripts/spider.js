const spiderSprite = new Image();
spiderSprite.src = "spider.png"
const spiderSpriteMirror = new Image();
spiderSpriteMirror.src = "spider-mirror.png"
let actions = ["left", "right"];

class Spider {
  constructor(game) {
    this.hostile = false;
    this.width = 32;
    this.height = 33;
    this.frameX = 0;
    this.frameY = 1;
    this.speed = (Math.random() * 3) + 2;
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
    let randomSize = Math.random() * 70 + 40;
    this.sizeX = randomSize
    this.sizeY = randomSize
  }

  draw(ctx) {
    if (this.direction === "right") {
      ctx.drawImage(spiderSpriteMirror, this.width * (this.frameX+3), this.height * this.frameY, this.width, this.height, this.x, this.y, this.sizeX, this.sizeY);
    }
    else {
      ctx.drawImage(spiderSprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.sizeX, this.sizeY);
    }
  }

  move() {
    if (this.direction === "right") {
      this.x += this.speed;
    }
    else {
      this.x -= this.speed;
    }

    if (this.frameX <= 4) {
      this.frameX ++
    } 
    else {
      this.frameX = 0
    }
  }


}

module.exports = Spider;