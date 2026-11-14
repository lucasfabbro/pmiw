//grupo: Lucas Fabbro y Tobias Bellido
//historia: LaGuerra de los Yacares
//video: https://youtube.com/watch?v=W-8uR4rhmVY&si=2B9o3R0pzO6_mTiN
let juego;
let cantidad = 5;
let imgFondo;
let imgYacareDer;
let imgYacareIzq;
let imgTronco;
let imgBala;
let sonidoFondo;
let sonidoTronco;
let sonidoBala;
let sonidoGanaste;
let sonidoPerdiste;

function preload() {
  imgFondo = loadImage("fondo.jpg");
  imgYacareDer = loadImage("yacare.png");
  imgYacareIzq = loadImage("yacareizq.png");
  imgTronco = loadImage("tronco.png");
  imgBala = loadImage("bala.png");
  sonidoFondo = loadSound("fondo.mp3");
  sonidoTronco = loadSound("tronco.mp3");
  sonidoBala = loadSound("bala.mp3");
  sonidoGanaste = loadSound("ganaste.mp3");
  sonidoPerdiste = loadSound("perdiste.mp3");
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego(cantidad, 150);
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
