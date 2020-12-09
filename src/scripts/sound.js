class Sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play() {
    let sound = this.sound.cloneNode(true)
    sound.volume = .2
    sound.play();
  }

}

module.exports = Sound