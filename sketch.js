const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '
const lenghtDensity = density.length
let photo;

function preload(){
  photo = loadImage('pippa2.png')
}


function setup() {
noCanvas()

  background(0);


  photo.loadPixels();
  for (let j = 0; j < photo.height; j++){
    let row ='';
    for (let i = 0; i < photo.width; i++){
      const pixelIndex = (i + j*photo.width)*4;
      const r = photo.pixels[pixelIndex + 0];
      const g = photo.pixels[pixelIndex + 1];
      const b = photo.pixels[pixelIndex + 2];
      const averageBrightness = (r + g + b)/ 3;
      const charIndex = floor(map(averageBrightness, 255, 0, 0, lenghtDensity));

      const html = density.charAt(charIndex);
      if (html == '') row += '&nbsp;'
      else row += html;



    }
    createDiv(row);
  }
}