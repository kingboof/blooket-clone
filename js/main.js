function setup() {
    // Create canvas & images
    createCanvas(windowWidth, windowHeight);
    loadImage('../assets/floortile.jpg', img => {
        image(img, 0, 0, 15000, 15000);
    });
    
}

function draw() {

}

function windowResized() {
    // Resize the game when the size of the window is changed
    resizeCanvas(windowWidth, windowHeight);
}