//variables

var mincolor;
var rojo;
var violet;
var mitadancho, mitadalto

function setup() {
  createCanvas(800, 500);

rojo = color(192, 1, 3);
violet = color(159, 0, 255);
mincolor = color(0, 0, 0);
 mitadancho = width / 2
 mitadalto = height / 2
  
}
function draw() {
  
    
  if (mouseIsPressed === false) 
    noFill() 
     strokeWeight(3);
  ellipse(mouseX, mouseY, 15, 15, pmouseX, pmouseY);
 
  if (mouseIsPressed === false) {
    background(67, 122, 191);
    frameRate(60);
  }
  if (mouseIsPressed === true) {
    background(67, 122, 191, 50);
  } else if (mouseButton == RIGHT) {
    background(rojo, 50);
  } else if (mouseButton == LEFT) {
    background(violet, 100);
  }
  if (mouseIsPressed === true) {
    translate(mouseX / 24, mouseY / 24);
  }
  
 
  
  //triángulo naranja
  strokeWeight(0);
  fill(255, 135, 0);
  triangle(235, 55, 270, 85, 140, 170);

  //triángulo rojo
  strokeWeight(0);
  fill(rojo);
  triangle(60, 240, 40, 300, 135, 310);

  //triángulo amarillo

  strokeWeight(0);
  fill(247, 223, 51, 225);
  triangle(120, 130, 270, 450, 50, 410);

  //elipse roja
  fill(rojo);
  strokeWeight(0);
  ellipse(300, 115, 50, 50);

  //semicirculos
  strokeWeight(3);
  stroke(223, 141, 255);
  fill(255, 255, 255);
  bezier(225, 266, 200, 220, 240, 177, 290, 225);

  strokeWeight(3);
  stroke(223, 141, 255);
  fill(255, 255, 255);
  bezier(300, 218, 290, 190, 320, 160, 340, 193);

  strokeWeight(3);
  stroke(223, 141, 255);
  fill(255, 255, 255);
  bezier(345, 190, 335, 170, 375, 140, 390, 161);

  strokeWeight(3);
  stroke(223, 141, 255);
  fill(255, 255, 255);
  bezier(395, 159, 385, 140, 415, 125, 425, 140);

  strokeWeight(3);
  stroke(223, 141, 255);
  fill(255, 255, 255);
  bezier(430, 137, 420, 107, 450, 102, 460, 118);

  //linea con semicírculos
  strokeWeight(3);
  stroke(mincolor);
  line(220, 270, 480, 105);

  //circulo rosa contorno blanco
  push();
  if (mouseIsPressed === true) {
    translate(mouseX / 24, mouseY / 24);
  } else {
    translate(0, 0);
  }
  strokeWeight(3);
  stroke(255, 255, 255);
  fill(213, 144, 139);
  ellipse(415, 230, 40, 40);
  pop();

  //lineas negras de abajo a la derecha
  strokeWeight(4);
  stroke(mincolor);
  strokeCap(SQUARE);
  line(60, 500, 90, 470);

  //lineas negras de abajo a la derecha
  strokeWeight(6);
  stroke(mincolor);
  strokeCap(SQUARE);
  line(110, 510, 160, 488);

  //semicírculo sin relleno borde rojo
  strokeWeight(5);
  stroke(rojo);
  noFill();
  bezier(480, 170, 590, 100, 660, 280, 600, 310);

  //linea negra abajo a la derecha
  strokeWeight(10);
  stroke(mincolor);
  line(580, 400, 770, 400);

  //punto rosa
  strokeWeight(25);
  stroke(220, 46, 103);
  point(230, 300);

  //puntas negra

  strokeWeight(0);
  fill(mincolor);
  triangle(700, 40, 350, 500, 300, 500);

  push();
  if (mouseIsPressed) fill(rojo);
  strokeWeight(3);
  ellipse(mouseX, mouseY, 15, 15, pmouseX, pmouseY);
  pop();

  console.log("x: " + mouseX + " y: " + mouseY);
}

document.oncontextmenu = function () {
  return false;
}
