let cor;
let posicaoHorizontal; //x
let posicaoVertical; //y

function setup() {
  
  createCanvas(500, 500);
   background(100, 45, 60);
  cor = color (random(0, 255),random(0, 255), random(0, 255), 210)
  posicaoHorizontal = 10;
  posicaoVertical = 20;
}

function draw() {
  
  circle (posicaoHorizontal, posicaoVertical, 15);
  fill (cor);
  
  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal -1;
  }
  
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal +1;
  }
  
  if (mouseY < posicaoVertical) {
    posicaoVertical --;
  }
  
  if (mouseY > posicaoVertical) {
    posicaoVertical ++;
  }
  
  if (mouseIsPressed) {
    cor = color (random(0, 255),random(0, 255), random(0, 255), 210);
  }
  
}
