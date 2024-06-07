//variáveis da bolinha
let xBolinha = 290
let yBolinha = 200
let diametro = 24
let raio = diametro 


//placar do jogo
let Pontuação1 = 0 
let Pontuação2 = 0


//velocidade da bolinha
let VelocidadexBolinha = 7
let VelocidadeyBolinha = 7
let ComprimentoRaquete = 10
let AlturaRaquete = 100

//variáveis da raquete
let xRaquete = 5
let yRaquete = 150
let VelocidadeyRaquete2;

let colidiu = false


//variáveis do oponente
let xRaquete2 = 565
let yRaquete2 = 150

function setup() {
  createCanvas(580, 400);
}

function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  VerificarColisaoBorda()
  MostrarRaquete(xRaquete, yRaquete)
  MovimentarMinhaRaquete()
  VerificarColisaoRaquete()
  MostrarRaquete2(xRaquete2, yRaquete2)
  ColisaoMinhaRaqueteBiblioteca()
  ColisaoRaquete2Biblioteca()
  MovimentaRaquete2()
  IncluirPlacar()
  MarcarPontos()
  
  
  
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += VelocidadexBolinha;
  yBolinha += VelocidadeyBolinha;
  }
 
function VerificarColisaoBorda(){
  if (xBolinha + raio > width ||
      xBolinha < 0){
    VelocidadexBolinha *= -1
  }
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0)
  
    VelocidadeyBolinha *= -1
  }


function MostrarRaquete(){
  rect(xRaquete,yRaquete,ComprimentoRaquete,AlturaRaquete);
}

function MovimentarMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
     yRaquete -= 10
   }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

function VerificarColisaoRaquete(){
  if (xBolinha - raio < xRaquete + ComprimentoRaquete
&& yBolinha - raio < yRaquete + AlturaRaquete && yBolinha + raio > yRaquete){
    VelocidadexBolinha *= -1
  }
}

function MostrarRaquete2(){
  rect(xRaquete2,yRaquete2,ComprimentoRaquete,AlturaRaquete);
}


function ColisaoMinhaRaqueteBiblioteca(){
  colidiu = false
  collideRectCircle(xRaquete, yRaquete, ComprimentoRaquete, AlturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu){
    VelocidadexBolinha *= -1
  }
  
}

function ColisaoRaquete2Biblioteca(){
  colidiu = false
  collideRectCircle(xRaquete2, yRaquete2, ComprimentoRaquete, AlturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu){
    VelocidadexBolinha *= -1
  }
  
}


function MovimentaRaquete2(){
  if (keyIsDown(87)){
     yRaquete2 -= 10
   }
  if (keyIsDown(83)){
    yRaquete2 += 10
  }
}

function IncluirPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(color(75, 0, 130))
  rect(130, 10, 40, 20)
  fill(255)
  text(Pontuação1, 150, 26)
  fill(color(75, 0, 130))
  rect(450, 10, 40, 20)
  fill(255)
  text(Pontuação2, 470, 26)
  
}

function MarcarPontos(){
  if(xBolinha > 562){
    Pontuação1 += 1
  }
  if(xBolinha < 3){
    Pontuação2 +=1
  }
}


