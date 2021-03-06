const spiderSprite = new Image();
spiderSprite.src = "spider.png";
const spiderSpriteMirror = new Image();
spiderSpriteMirror.src = "spider-mirror.png";
let actions = ["left", "right"];

class Spider {
  constructor(game) {
    this.hostile = false;
    this.width = 32;
    this.height = 36.75;
    this.frameX = 0;
    this.frameY = 1;
    this.speed = Math.random() * 5 + 1;
    this.direction = actions[Math.floor(Math.random() * actions.length)];
    let randomSize = Math.random() * 100 + 40;
    this.sizeX = randomSize;
    this.sizeY = randomSize;
    if (this.direction === "right") {
      this.flipped = true;
      this.x = 0 - this.sizeX / 2;
    } else {
      this.flipped = false;
      this.x = game.DIM_X;
    }
    this.y = game.randomPosition()[1];
    this.game = game;
  }

  draw(ctx) {
    if (this.direction === "right") {
      ctx.drawImage(
        spiderSpriteMirror,
        this.width * (this.frameX + 3),
        this.height * this.frameY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.sizeX,
        this.sizeY
      );
    } else {
      ctx.drawImage(
        spiderSprite,
        this.width * this.frameX,
        this.height * this.frameY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.sizeX,
        this.sizeY
      );
    }
  }

  move() {
    if (this.direction === "right") {
      this.x += this.speed;
      if (this.moveAway()) {
        if (this.y > this.game.slime.y) {
          this.y += this.speed;
        } else {
          this.y -= this.speed;
        }
      }
    } else {
      this.x -= this.speed;
      if (this.moveAway()) {
        if (this.y > this.game.slime.y) {
          this.y += this.speed;
        } else {
          this.y -= this.speed;
        }
      }
    }

    if (this.frameX <= 4) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }

  moveAway() {
    if (
      this.x < this.game.slime.x + this.game.slime.sizeX &&
      this.x + this.sizeX > this.game.slime.x &&
      this.y < this.game.slime.y + this.game.slime.sizeY &&
      this.y + this.sizeY > this.game.slime.y
    ) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Spider;
