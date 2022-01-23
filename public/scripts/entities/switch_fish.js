class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/fish03.gif";
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
