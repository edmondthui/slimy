class Sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play() {
    let sound = this.sound.cloneNode(true)
    // sound.volume = .2
    sound.play();
    // this.sound.play();
  }

  repeatPlay() {
    this.sound.volume = .05
    this.sound.id = "music"
    this.sound.addEventListener('ended', () => {
      this.currentTime = 0;
      this.sound.play();
    });
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }

}

module.exports = Sound