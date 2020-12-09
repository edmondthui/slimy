class GameView{
  constructor(game, context) {
    this.game = game;
    this.context = context
  }
  start () {
    // setInterval(this.game.step.bind(this.game), 50);
    setInterval(this.game.draw.bind(this.game, this.context), 100);
  }
}
  
module.exports = GameView;