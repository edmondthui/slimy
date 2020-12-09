const spiderSprite = new Image();
spiderSprite.src = "spider.png"
let actions = ["left", "right"];

class Spider {
  constructor(game) {
    this.width = 32;
    this.height = 34;
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
    let randomSize = Math.random() * 200 + 50;
    this.sizeX = randomSize
    this.sizeY = randomSize
  }

  draw(ctx) {
    if (this.direction === "right") {
      ctx.scale(-1, 1);
      ctx.drawImage(spiderSprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, -this.width-this.x, this.y, this.sizeX, this.sizeY);
      ctx.scale(-1, 1);
    }
    else {
      ctx.drawImage(spiderSprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.sizeX, this.sizeY);
    }
    console.log("draw")
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