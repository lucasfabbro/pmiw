let imagenes = [];
let pantalla = 0;

function preload() {
  imagenes[0] = loadImage("data/Inicio.jpg");
  
  for (let i = 1; i <= 14; i++) {
    imagenes[i] = loadImage("data/pantalla" + i + ".jpg");
  }
  
  imagenes[15] = loadImage("data/alternativo1.jpg");
  imagenes[16] = loadImage("data/alternativo2.jpg");
  imagenes[17] = loadImage("data/fin.jpg");
  imagenes[18] = loadImage("data/creditos.jpg");
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  mostrarPantalla(pantalla, imagenes);
}

function mostrarPantalla(p, imgs) {
  image(imgs[p], 0, 0, width, height);
  if (p == 18) {        
    mostrarCartel();
  }
}


function mostrarCartel() {
  fill(255, 255, 255, 180);
  noStroke();
  rect(10, 400, 220, 40, 6);
  fill(30);
  textSize(13);
  textAlign(LEFT, TOP);
  text("ESPACIO = reiniciar", 18, 412);
}

function decidirPantalla(p, mx, mitad) {
  if (p == 0) { return 1; }
  else if (p == 1) { return 2; }
  else if (p == 2) { return 3; }
  else if (p == 3) {
    if (mx < mitad) { return 4; }
    else { return 5; }
  }
  else if (p == 4) { return 5; }
  else if (p == 5) { return 6; }
  else if (p == 6) {
    if (mx < mitad) { return 7; }
    else { return 8; }
  }
  else if (p == 7) { return 9; }
  else if (p == 8) { return 11; }
  else if (p == 9) { return 10; }
  else if (p == 10) {
    if (mx < mitad) { return 15; }
    else { return 8; }             
  }
  else if (p == 11) { return 12; }
  else if (p == 12) {
    if (mx < mitad) { return 13; }
    else { return 14; }
  }
  else if (p == 13) { return 17; }
  else if (p == 14) { return 16; }
  else if (p == 15) { return 18; }
  else if (p == 16) { return 18; }
  else if (p == 17) { return 18; }
  else { return p; }
}

function mouseClicked() {
  pantalla = decidirPantalla(pantalla, mouseX, width / 2);
}

function keyPressed() {
  if (key == " ") {
    pantalla = reiniciar(pantalla);
  }
}

function reiniciar(p) {
  if (p == 18) {
    return 0;
  } else {
    return p;
  }
}
