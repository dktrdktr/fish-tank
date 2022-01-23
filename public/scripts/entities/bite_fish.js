class BiteFish extends Fish {
  constructor(options) {
    super(options); // Make sure to call super so that Denizen's constructor is called properly
    this.imageUri = "/images/bitefish.gif"; // The image that will be used for the sprite: "/images/image-name.png"
    this.waterFriction = 0.1; // Optional: The rate at which the sprite will slow down in the water. "0.3" means "lose 30% of speed per second"
    this.surgeSecondsLeft = 0;
    this.maxSwimSpeed = 200;
    this.maxSurge = 4.0;
    this.surgMult = 3.0;
    this.isTasty = false;
    this.step = 0;
  }

  updateOneTick() {
    // Circular motion
    let thisVec = new Vector(
      Math.cos(0.25 * this.step) * 1500,
      Math.sin(0.25 * this.step) * 1500
    );
    this.step++;
    console.log(thisVec);
    thisVec = thisVec.scale(PHYSICS_TICK_SIZE_S);
    console.log(thisVec);
    this.position.addMut(thisVec);
    // Eat tasty fish
    const proximates = this.tank.getProximateDenizens(this.position, 100);
    const tastyProximates = proximates.filter(
      (prox) => prox.isTasty && prox.isTasty === true
    );
    tastyProximates.forEach((prox) => {
      this.tank.removeDenizen(prox.id);
    });
  }
}
