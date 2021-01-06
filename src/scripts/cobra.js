const cobraSprite = new Image();
cobraSprite.src = "cobra.png";
const cobraSpriteMirror = new Image();
cobraSpriteMirror.src = "cobra-mirror.png";
let actions = ["left", "right"];

class Cobra {
  constructor(game) {
    this.hostile = false;
    this.width = 32;
    this.height = 33;
    this.frameX = 0;
    this.frameY = 1;
    this.speed = Math.random() * 10 + 10;
    this.direction = actions[Math.floor(Math.random() * actions.length)];
    this.sizeX = 100;
    this.sizeY = 100;
    if (this.direction === "right") {
      this.flipped = true;
      this.x = 0 - this.sizeX / 2;
    } else {
      this.flipped = false;
      this.x = game.DIM_X;
    }
    this.y = game.randomPosition()[1] + this.sizeY;
    this.game = game;
  }

  draw(ctx) {
    if (this.direction === "right") {
      ctx.drawImage(
        cobraSprite,
        this.width * this.frameX,
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
        cobraSpriteMirror,
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

    if (this.frameX <= 6) {
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

module.exports = Cobra;
