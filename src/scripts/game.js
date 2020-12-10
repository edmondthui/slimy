const Spider = require("./spider.js");
const Adventurer = require("./adventurer.js");
const Sound = require('./sound')
const slimeSprite = new Image();
slimeSprite.src = "slime.png";
const slimeSpriteMirror = new Image();
slimeSpriteMirror.src = "slime-mirror.png";
const background = new Image();
background.src = "dungeon.png";
let characters = ["spider", "spider", "spider", "spider", "spider", "spider", "adventurer"]


class Game {
  constructor(DIM_X, DIM_Y) {
    this.eat = new Sound("eat.mp3")
    this.numCharacters = 10;
    this.characters = [];
    this.keys = [];
    (this.DIM_X = DIM_X), (this.DIM_Y = DIM_Y);
    this.slime = {
      width: 31,
      height: 22,
      x: this.randomPosition()[0],
      y: this.randomPosition()[1],
      frameX: 0,
      frameY: 0,
      speed: 5,
      moving: false,
      // sizeX: 64,
      // sizeY: 26,
      sizeX: 80,
      sizeY: 40,
      flipped: false,
    };

    window.addEventListener("keydown", (e) => {
      this.keys.push(e.key);
    });

    window.addEventListener("keyup", (e) => {
      this.keys = this.keys.filter((x) => x !== e.key);
      this.slime.moving = false;
    });

    this.addEnemies();
  }

  addEnemies() {
    if (this.characters.length < this.numCharacters) {
      for (let i = this.characters.length; i < this.numCharacters; i++) {
        let spawn = characters[Math.floor(Math.random() * characters.length)]
        if (spawn === "spider") {
          this.characters.push(new Spider(this));
        }
        else if (spawn === "adventurer") {
          this.characters.push(new Adventurer(this));
        }
      }
    }
  }

  randomPosition() {
    return [Math.random() * this.DIM_X - 30, Math.random() * this.DIM_Y - 20];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.drawImage(background, 0, 0, this.DIM_X, this.DIM_Y);
    this.movePlayer();
    this.handleAnimation();
    this.characters.forEach((enemy) => enemy.draw(ctx));
    if (!this.slime.flipped) {
      ctx.drawImage(
        slimeSprite,
        this.slime.width * this.slime.frameX,
        this.slime.height * this.slime.frameY,
        this.slime.width,
        this.slime.height,
        this.slime.x,
        this.slime.y+30,
        this.slime.sizeX,
        this.slime.sizeY
      );
    } else {
      ctx.drawImage(
        slimeSpriteMirror,
        this.slime.width * this.slime.frameX,
        this.slime.height * this.slime.frameY,
        this.slime.width,
        this.slime.height,
        this.slime.x,
        this.slime.y+30,
        this.slime.sizeX,
        this.slime.sizeY
      );
    }

  }

  moveEnemies() {
    this.characters.forEach((enemy) => enemy.move());
  }

  step() {
    this.checkCollisions();
    this.moveEnemies();
    this.addEnemies();
    this.removeEnemies();
    this.win();
  }

  win() {
    if (this.slime.sizeX * this.slime.sizeY >= 750000) {
      this.characters = [];
      this.numCharacters = 0;
      let winScreen = document.createElement('div');
      winScreen.id = "win"
      let replayButton = document.createElement("button");
      let winTitle = document.createElement("h1");
      winTitle.id = "win-title"
      winTitle.innerHTML = "You Win!"
      replayButton.id = "replay"
      replayButton.innerHTML= "Replay"
      if (document.body.children.length < 9) {
        document.body.appendChild(replayButton);
        document.body.appendChild(winScreen);
        document.body.appendChild(winTitle);
      }
      replayButton.addEventListener("click", () => {
        this.numCharacters = 10;
        this.slime.sizeX = 80;
        this.slime.speed = 5;
        this.slime.sizeY = 40;
        this.slime.x = this.randomPosition()[0],
        this.slime.y = this.randomPosition()[1],
        winScreen.parentNode.removeChild(winScreen);
        replayButton.parentNode.removeChild(replayButton);
        winTitle.parentNode.removeChild(winTitle);
      })
    }
  }

  removeEnemies() {
    this.characters.forEach((enemy, idx) => {
      if (enemy.x < -100 || enemy.x > this.DIM_X + 100) {
        this.characters.splice(idx, 1);
      }
    });
  }

  checkCollisions() {
    this.characters.forEach((enemy, idx) => {
      if (
        enemy.x < this.slime.x + (this.slime.sizeX *.50) &&
        enemy.x + (enemy.sizeX *.50) > this.slime.x &&
        enemy.y < this.slime.y + (this.slime.sizeY *.50) &&
        enemy.y + (enemy.sizeY *.50) > this.slime.y
      ) {

      // let dist = Math.sqrt((this.slime.x - enemy.x) ** 2 + (this.slime.y + enemy.y ** 2)) // collision using the distance formulat not working
      // if (((this.slime.sizeY/2 *.5) + (enemy.sizeY/2 *.5)) > dist) {

        if ((enemy.sizeX * enemy.sizeY * .1) < (this.slime.sizeX * this.slime.sizeY)) {
          this.characters.splice(idx, 1);
          this.slime.sizeX += 6; //SLIME SIZE AFTER EATING
          this.slime.sizeY += 6; //SLIME SIZE AFTER EATING
          this.slime.speed += .2;
          this.numCharacters += .2;
          this.eat.play();
        }
        else if (enemy.hostile === true ) {
          console.log("You Lose!")
        }
      }
    });
  }

  movePlayer() {
    if (
      (this.keys.includes("w") || this.keys.includes("ArrowUp")) &&
      this.slime.y > (0 - this.slime.sizeY)
    ) {
      this.slime.y -= this.slime.speed;
      this.slime.moving = true;
    }
    if (
      (this.keys.includes("a") || this.keys.includes("ArrowLeft")) &&
      this.slime.x > (0 - this.slime.sizeX)
    ) {
      this.slime.flipped = false;
      this.slime.moving = true;
      this.slime.x -= this.slime.speed;
    }
    if (
      (this.keys.includes("s") || this.keys.includes("ArrowDown")) &&
      this.slime.y < this.DIM_Y - 20
    ) {
      this.slime.y += this.slime.speed;
      this.slime.moving = true;
    }
    if (
      (this.keys.includes("d") || this.keys.includes("ArrowRight")) &&
      this.slime.x < this.DIM_X - 20
    ) {
      this.slime.flipped = true;
      this.slime.moving = true;
      this.slime.x += this.slime.speed;
    }
  }

  handleAnimation() {
    if (!this.slime.flipped) {
      if (this.slime.frameX <= 9 && !this.slime.moving) {
        this.slime.frameY = 0;
        this.slime.frameX++;
      } else if (this.slime.frameX <= 5 && this.slime.moving) {
        this.slime.frameY = 1;
        this.slime.frameX++;
      } else {
        this.slime.frameX = 0;
      }
    }
    else {
      if (this.slime.frameX <= 9 && !this.slime.moving) {
        this.slime.frameY = 0;
        this.slime.frameX++;
      } else if (this.slime.frameX <= 9 && this.slime.moving) {
        this.slime.frameY = 1;
        this.slime.frameX++;
      }
      else {
        this.slime.frameX = 4;
      }
    }
  }

}

module.exports = Game;
