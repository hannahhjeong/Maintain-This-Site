var images = [];
var imageCollection = [];
let sans, bgImage, bgImage2, bgImage3;
let ellipses = [];
let winWidth = 1500;
let winHeight = 1500;
let scrollEffect = 0;
let bgPositions = []; // Store positions for the background images
let timer = 0; // Timer for controlling position updates

// Preload fonts and images
function preload() {
  sans = loadFont('assets/WorkSans-Bold.ttf');
  bgImage = loadImage('assets/dirt 1.png');
  bgImage2 = loadImage('assets/dirt 2.png');
  bgImage3 = loadImage('assets/dirt 3.png');
}

function setup() {
  createCanvas(winWidth, winHeight);

  // Initialize random positions for the background images
  for (let i = 0; i < 3; i++) {
    bgPositions.push({
      x: random(0, winWidth - 500), // Random x-position
      y: random(0, winHeight - 500) // Random y-position
    });
  }
}

function draw() {

  // Check if it's time to update positions
  if (millis() - timer > 2000) {
    updateBgPositions();
    timer = millis(); // Reset the timer
  }

  // Draw the background images at their respective positions
  image(bgImage, bgPositions[0].x, bgPositions[0].y, 500, 500);
  image(bgImage2, bgPositions[1].x, bgPositions[1].y, 500, 500);
  image(bgImage3, bgPositions[2].x, bgPositions[2].y, 500, 500);

  // Draw ellipses
  noStroke();
  fill(0, 0, 0);
  ellipse(mouseX, mouseY, 200);
}

// Function to update positions of background images
function updateBgPositions() {
  for (let i = 0; i < bgPositions.length; i++) {
    bgPositions[i] = {
      x: random(0, winWidth - 500), // Random x-position
      y: random(0, winHeight - 500) // Random y-position
    };
  }
}