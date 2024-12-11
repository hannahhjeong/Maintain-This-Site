let mono, sans, bgImage, bgImage2, bgImage3;
let ellipses = [];
let winWidth = 1500;
let winHeight = 1500;
let scrollEffect = 0;

// Preload fonts and images
function preload() {
  // sans = loadFont('WorkSans-Bold.ttf');
  bgImage = loadImage('assets/dirt1.png');
  bgImage2 = loadImage('assets/dirt2.png');
  bgImage3 = loadImage('assets/dirt3.png');
}

function setup() {
  createCanvas(winWidth, winHeight);
}
function draw() {
  // Redraw images on scroll
  push();
  translate(0, scrollEffect * 0.1); // Apply vertical translation
  image(bgImage, 0, 0, winWidth, winHeight);
  pop();

  push();
  translate(500, scrollEffect * 0.5); // Apply vertical translation
  image(bgImage2, 0, 0, winWidth, winHeight);
  pop();

  push();
  translate(0, scrollEffect * 0.9); // Apply vertical translation
  image(bgImage3, 0, 0, winWidth, winHeight);
  pop();

  // Draw ellipses
  noStroke();
  fill(255, 255, 255);
  ellipse(mouseX, mouseY, 100);
  
}

// Function to capture scrolling and redraw images
function mouseWheel(event) {
  scrollEffect += event.deltaY;
  scrollEffect = constrain(scrollEffect, -1000, 1000); // Limit scrolling effect
}

// Function to draw ellipses on mouse drag
function mouseMoved() {
  ellipses.push({ x: mouseX, y: mouseY });
}