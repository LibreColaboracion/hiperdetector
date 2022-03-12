class zonaDetector{
  constructor(nombre, x, y, ax, ay='nil', v = vida){
    this.nombre = nombre ;
    this.backgroundCapturedFlag = false;
    this.index = 'nil'
    this.x = x;
    this.y = y;
    this.ax = ax;
    this.ay = ay != 'nil' ? ay : ax ;
    this.v = v
    this.teclas = {
      testmode:false,
      fondoestatico:false
    }

    this.v.addActiveZone(
      this.nombre,
      map(this.x, 0, width, 0.0, 1.0),
      map(this.y, 0, height, 0.0, 1.0),
      map(this.ax, 0, width, 0.0, 1.0),
      map(this.ay, 0, height, 0.0, 1.0)
    )
    this.v.activeZones.findIndex( i =>{ 
      if( i.id === this.nombre){
        this.index = vida.activeZones.indexOf(i);
      };
    });

  }
  activar(x = this.x, y = this.y, ax = this.ax, ay = this.ay){
    let contador = 0;
    let bordeColor = [190,30,90]
    this.v.activeZones[this.index].normX = map(x, 0, width, 0.0, 1.0);
    this.x = x;
    this.v.activeZones[this.index].normY = map(y, 0, height, 0.0, 1.0);
    this.y = y;
    this.v.activeZones[this.index].normW = map(ax, 0, width, 0.0, 1.0);
    this.ax = ax;
    this.v.activeZones[this.index].normH = map(ay, 0, height, 0.0, 1.0);
    this.ay = ay;
    if(this.v.activeZones[this.index].isMovementDetectedFlag){
      bordeColor = [118,255,3]
    }
    if(keyIsDown(77)){
      if(this.teclas['testmode'] === false){
        this.teclas['testmode'] = true ;
      }else if(this.teclas['testmode'] === true){
        this.teclas['testmode'] = false ;
      }
    }
    if(this.teclas['testmode'] == true){
      push()
        noFill()
        strokeWeight(5)
        stroke(bordeColor)
        rect(this.x, this.y, this.ax, this.ay)
        push()
          strokeWeight(2)
          stroke(bordeColor)
          textSize(20)
          text(this.nombre, this.x, this.y + this.ay + 16)
        pop()
      pop()
    }
  }
  estaActivo(){
    return this.v.activeZones[this.index].isMovementDetectedFlag;
  }
}

function prepararDectector(c = camara,v = vida){
  pixelDensity(1);
  c.hide();
  v.progressiveBackgroundFlag = false;
  v.imageFilterThreshold = 0.2;
  v.handleActiveZonesFlag = true;
  v.setActiveZonesNormFillThreshold(0.05);
}
function iniciarDetector(tipo='nil', x = 0, y = 0, c = camara, v = vida){
  v.update(c);
  //push();
  if(tipo == 'espejo'){
    translate(width,0);
    scale(-1, 1);
  }
    image(v.currentImage, x, y);
  //pop()
  c.loadPixels();
  if(keyIsDown(70)){
    image(v.backgroundImage, x, y);
  }
}
function capturarFondo(c = camara, v = vida){
  if(c !== null && c !== undefined) { // safety first
    v.setBackgroundImage(camara);
    backgroundCapturedFlag = true;
    console.log('Fondo estatico ok');
  }
}
