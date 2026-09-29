let imagenInicio, img1, img2, img3, img4, img5;
let pantalla = 0;

function preload() {
  imagenInicio = loadImage("data/Inicio.jpg");
  img1 = loadImage("data/pantalla1.jpg");
  img2 = loadImage("data/pantalla2.jpg");
  img3 = loadImage("data/pantalla3.jpg");
  img4 = loadImage("data/pantalla4.jpg");
  img5 = loadImage("data/pantalla5.jpg");
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  mostrarPantalla(pantalla, imagenInicio, img1, img2, img3, img4, img5);
}

function mostrarPantalla(p, inicio, p1, p2, p3, p4, p5) {
  if (p == 0) {
    image(inicio, 0, 0, 800, 450);
  } else if (p == 1) {
    image(p1, 0, 0, 800, 450);
  } else if (p == 2) {
    image(p2, 0, 0, 800, 450);
  } else if (p == 3) {
    image(p3, 0, 0, 800, 450);
  } else if (p == 4) {
    image(p4, 0, 0, 800, 450);
  } else if (p == 5) {
    image(p5, 0, 0, 800, 450);
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

function decidirPantalla(p, mx, my) {
  if (p == 0) {
    return 1;
  } else if (p == 1) {
    return 2;
  } else if (p == 2) {
    return 3;
  } else if (p == 3) {
    if (mx < 400) {
      return 4;
    } else {
      return 5;
    }
  } else if (p == 4) {
    return 5;
  } else {
    return p;
  }
}

function mouseClicked() {
  pantalla = decidirPantalla(pantalla, mouseX, mouseY);
}

function keyPressed() {
  if (key == " ") {
    pantalla = reiniciar(pantalla);
  }
}


function reiniciar(p) {
  if (p == 5) {
    return 0;
  } else {
    return p;
  }
}
