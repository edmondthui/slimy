import "./styles/index.scss";

import Game from './scripts/game'
import GameView from './scripts/game_view'

document.addEventListener("DOMContentLoaded", ()=> {

  const canvas = document.getElementById("game");
  canvas.width = 1000;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");
  let game = new Game(canvas.width, canvas.height);
  let gameView = new GameView(game, ctx);
  gameView.start();
})
