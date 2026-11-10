let juego;
let cantidad = 5;
let imgFondo;
let imgYacareDer;
let imgYacareIzq;
let imgTronco;
let imgBala;

function preload() {
  imgFondo = loadImage("data/fondo.jpg");
  imgYacareDer = loadImage("data/yacare.png");
  imgYacareIzq = loadImage("data/yacareizq.png");
  imgTronco = loadImage("data/tronco.png");
  imgBala = loadImage("data/bala.png");
}

function setup() {
  createCanvas(800, 400);
  juego = new Pantallas(cantidad, 150);
}

function draw() {
  image(imgFondo, 0, 0, width, height);
  juego.dibujar();
  juego.moverYacare();
  juego.detectarColision();
}

function keyPressed() {
  juego.cambiarEstado();
}
