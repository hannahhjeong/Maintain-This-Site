// Variables and Arrays
var images = [];
var imageCollection = [];
let mono, sans, bgImage;
let imageFiles = ['assets/Layer 2.png', 'assets/Layer 3.png', 'assets/Layer 4.png', 'assets/Layer 5.png', 'assets/Layer 6.png', 'assets/Layer 7.png', 'assets/Layer 9.png', 'assets/Layer 10.png'];

// Preload fonts and images
function preload() {
  mono = loadFont('assets/FreeMono.otf');
  sans = loadFont('assets/WorkSans-Bold.ttf');
  bgImage = loadImage('assets/sink.png');

  // Load all images into imageCollection array
  for (let i = 0; i < imageFiles.length; i++) {
    imageCollection.push(loadImage(imageFiles[i]));
  }
}

// ImageObject class to handle images
class ImageObject {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.size = 100 // Default size of the image
  }

  // Display the image on the canvas
  display() {
    image(this.image, this.x, this.y, this.size, this.size);
  }

  // Check if the mouse click is within the image boundaries
  isClicked(mx, my) {
    return (
      mx >= this.x &&
      mx <= this.x + this.size &&
      my >= this.y &&
      my <= this.y + this.size
    );
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Continuously draw the background to reset the screen
  background(bgImage);

  // // Draw the title text
  // textSize(50);
  // textFont(sans);
  // fill(0);
  // text("MAINTAIN THIS SITE", 50, 50);
  //  textSize(20);
  // text("CLICK TO CLEAR THE SINK", 50, 90);

  // Randomly add images at a controlled rate
  if (random(1) < 0.05 && images.length < 8) {
    let randomX = random(width);
    let randomY = random(height);
    let randomImg = random(imageCollection); // Pick a random image
    let newImage = new ImageObject(randomImg, randomX, randomY);
    images.push(newImage);
  }

  // Draw all images
  for (let i = 0; i < images.length; i++) {
    images[i].display();
  }
}

// Function to handle mouse clicks
function mousePressed() {
  // Check if the user clicked on any images
  for (let i = images.length - 1; i >= 0; i--) {
    if (images[i].isClicked(mouseX, mouseY)) {
      images.splice(i, 1); // Remove the clicked image
      break;
    }
  }
}
