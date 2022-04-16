let camara;
let vida;
let h;
let fallo; // variable que contendrá el audio
function preload() {
  //soundFormats('mp3', 'ogg');
  //fallo = loadSound('media/fallo.mp3'); // Cargo el audio a la variable
}
function setup(){
  lienzo = createCanvas(windowWidth, windowHeight);
  lienzo.parent('canvas');
  frameRate(90);
  camara = createCapture(VIDEO);
  camara.size(windowWidth, windowHeight);
  vida = new Vida(this); // create the object
  prepararDectector();
  h = new zonaDetector('uno', 300, 300, 50,50)
}
function draw(){
  iniciarDetector('espejo')
  h.activar()
  if(h.estaActivo()){
    ellipse(width/2 - 100, height / 2 -100, 200, 200)
  }

}

function keyPressed() {
  if (keyIsDown(32)) {
    capturarFondo();
  }
}

