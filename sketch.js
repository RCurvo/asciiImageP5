const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '
const lenghtDensity = density.length
let photo;

function preload(){
  photo = loadImage('pippa2lowres.jpg')
}


function setup() {
  createCanvas(640, 1136);
}

function draw() {
  background(0);


  let w = width/photo.width;
  let h = height/photo.height;
  photo.loadPixels();
  for (let i = 0; i < photo.width; i++){
    for (let j = 0; j < photo.height; j++){
      const pixelIndex = (i + j*photo.width)*4;
      const r = photo.pixels[pixelIndex + 0];
      const g = photo.pixels[pixelIndex + 1];
      const b = photo.pixels[pixelIndex + 2];
      const averageBrightness = (r + g + b)/ 3;
      noStroke();
      fill(255);
      // square(i*w, j*h,w);
      const charIndex = floor(map(averageBrightness, 255, 0, 0, lenghtDensity));

      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i*w + w*0.5, j*h + h*0.5);
    }
  }
}