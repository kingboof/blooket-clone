function setup() {
    // Create canvas & images
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    for (let i = 0; i < 150; i++) {
        loadImage('../assets/floortile.jpg', createMap);
    }
}

function windowResized() {
    // Resize the game when the size of the window is changed
    resizeCanvas(windowWidth, windowHeight);
}

function createMap(image_to_display) {
    this.img = image_to_display;
    this.img.resize(100,100)
    alert(this.img)
  }