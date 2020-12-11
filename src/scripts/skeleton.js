const skeletonSprite = new Image();
skeletonSprite.src = "skeleton.png"
let actions = ["left", "right"];

class Skeleton {
  constructor(game) {
    this.hostile = true;
    this.width = 64;
    this.height = 64;
    this.frameX = 0;
    this.speed = (Math.random() * 5) + 2;
    this.direction = actions[Math.floor(Math.random() * actions.length)]
    this.sizeX = 150;
    this.sizeY = 150;
    if (this.direction === "right") {
      this.flipped = true;
      this.x = 0 - this.sizeX/2;
    }
    else {
      this.flipped = false;
      this.x = game.DIM_X;
    }
    this.y = game.randomPosition()[1] - this.sizeY
  }

  draw(ctx) {
    this.frameY = 3;
    if (this.direction === "right") {
      ctx.drawImage(skeletonSprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.sizeX, this.sizeY);
    }
    else {
      this.frameY = 1;
      ctx.drawImage(skeletonSprite, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.sizeX, this.sizeY);
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

module.exports = Skeleton;