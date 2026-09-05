let fondo;

let framesIdle = [];
let framesRun = [];
let framesAttack = [];

let estado = "idle";
let frameActual = 0;
let contador = 0;
let velocidad = 10;

let perroX = 300;
let perroY = 400;
let perroW = 80;
let perroH = 80;

function preload() {
  fondo = loadImage("data/fondo.jpg");

  for (let i = 1; i <= 3; i++) {
    framesIdle[i - 1] = loadImage("data/Idle" + i + ".png");
  }
  for (let i = 1; i <= 4; i++) {
    framesRun[i - 1] = loadImage("data/Run" + i + ".png");
  }
  for (let i = 1; i <= 4; i++) {
    framesAttack[i - 1] = loadImage("data/Attack" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  image(fondo, 0, 0, 800, 600);

  contador++;
  if (contador >= velocidad) {
    contador = 0;
    frameActual = avanzarFrame(frameActual, obtenerFrames(estado));
  }

  dibujarPersonaje(obtenerFrames(estado), frameActual, perroX, perroY, perroW, perroH);

  if (estado == "run") {
    perroX += 3;
    if (perroX > 800) {
      perroX = -perroW;
    }
  }

  mostrarEstado();
}

function dibujarPersonaje(frames, indice, x, y, w, h) {
  image(frames[indice], x, y, w, h);
}

function avanzarFrame(actual, frames) {
  if (actual + 1 >= frames.length) {
    return 0;
  } else {
    return actual + 1;
  }
}

function obtenerFrames(est) {
  if (est == "idle") {
    return framesIdle;
  } else if (est == "run") {
    return framesRun;
  } else {
    return framesAttack;
  }
}

function mostrarEstado() {
  fill(255, 255, 255, 180);
  noStroke();
  rect(10, 10, 260, 70, 6);

  fill(30);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Estado: " + estado, 18, 18);
  text("I = idle   R = correr   A = atacar", 18, 38);
  text("+ / - velocidad   ESPACIO = reiniciar", 18, 58);
}

function keyPressed() {
  if (key == "i" || key == "I") {
    cambiarEstado("idle");
  } else if (key == "r" || key == "R") {
    cambiarEstado("run");
  } else if (key == "a" || key == "A") {
    cambiarEstado("attack");
  }

  if (key == "+" || key == "=") {
    velocidad -= 2;
    if (velocidad < 2) velocidad = 2;
  }
  if (key == "-") {
    velocidad += 2;
    if (velocidad > 30) velocidad = 30;
  }

  if (key == " ") {
    reiniciar();
  }
}

function cambiarEstado(nuevoEstado) {
  estado = nuevoEstado;
  frameActual = 0;
  contador = 0;
}

function reiniciar() {
  estado = "idle";
  frameActual = 0;
  contador = 0;
  velocidad = 10;
  perroX = 300;
}
