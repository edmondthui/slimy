import "./styles/index.scss";
import Sound from './scripts/sound'
import Game from './scripts/game'
import GameView from './scripts/game_view'

document.addEventListener("DOMContentLoaded", ()=> {
  let music = new Sound("song.mp3")
  const canvas = document.getElementById("game");
  canvas.width = 1000;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");
  let game = new Game(canvas.width, canvas.height);
  let gameView = new GameView(game, ctx);
  const startButton = document.getElementById("start")
  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    gameView.start();
    startButton.parentNode.removeChild(startButton);
    music.repeatPlay();
  })
  const musicButton = document.getElementById("music-button")
  musicButton.addEventListener("click", () => {
    const bgMusic = document.getElementById("music")
    if (bgMusic.paused) {
      music.repeatPlay();
      musicButton.innerHTML= "🔊"
    } else {
      music.pause();
      musicButton.innerHTML = "🔇"
    }
  })

  const replayButton = document.getElementById("replay")
  const winScreen = document.getElementById("win")
  replayButton.addEventListener("click", (e) => {
    e.preventDefault();
    gameView.start();
    startButton.parentNode.removeChild(replayButton);
    winScreen.parentNode.removeChild(winScreen);
    startButton.parentNode.removeChild(startButton);
    music.repeatPlay();
  })

})
