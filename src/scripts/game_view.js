class GameView{
  constructor(game, context) {
    this.game = game;
    this.context = context
  }
  start() {
    // setInterval(this.game.step.bind(this.game), 50);

    this.draw = setInterval(this.game.draw.bind(this.game, this.context), 50);
    this.step = setInterval(this.game.step.bind(this.game, this.context), 50);
  }

  won() {
    
  }

}
  
module.exports = GameView;