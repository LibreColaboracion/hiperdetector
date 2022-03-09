let camara;
let vida;
let h;

function setup(){
  lienzo = createCanvas(windowWidth, windowHeight);
  lienzo.parent('canvas');
  frameRate(90);
  camara = createCapture(VIDEO);
  camara.size(windowWidth, windowHeight);
  vida = new Vida(this); // create the object
  prepararDectector();
  
  h = new zonaDetector('uno', 200, 200, 100,10)
}
function draw(){
  iniciarDetector()
  h.activar()
  if(h.estaActivo()){
    //ellipse(width / 2, height / 2, 150)
  } 
}
function keyPressed() {
  if (keyIsDown(32)) {
    capturarFondo();
  }
}

