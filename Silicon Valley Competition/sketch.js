var letterA,letterB,letterC,letterD,letterE,letterF,letterG,letterH,letterI,letterJ,letterK,letterL,letterM,letterN,letterO,letterP,letterQ,letterR,letterS,letterT,letterU,letterV,letterW,letterX,letterY,letterZ;

var gameBackground, gameBackgroundIMG, homeBackground, homeBackgroundIMG;

var playerCount = 0;

var player, form, game;

var database;

var question1, question2, question3, question4, questions;

var gameState = 1;

var questionNum = 0;

var gunIMG, bullet;

function preload(){
  gameBackground = loadImage("Images/game background.jpg")
  homeBackground = loadImage("Images/background image.webp")


  letterA = loadImage("Images/letter A.png")
  letterB = loadImage("Images/letter B.png")
  letterC = loadImage("Images/letter C.png")
  letterD = loadImage("Images/letter D.png")
  letterE = loadImage("Images/letter E.png")
  letterF = loadImage("Images/letter F.png")
  letterG = loadImage("Images/letter G.png")
  letterH = loadImage("Images/letter H.png")
  letterI = loadImage("Images/letter I.png")
  letterJ = loadImage("Images/letter J.png")
  letterK = loadImage("Images/letter K.png")
  letterL = loadImage("Images/letter L.png")
  letterM = loadImage("Images/letter M.png")
  letterN = loadImage("Images/letter N.png")
  letterO = loadImage("Images/letter O.png")
  letterP = loadImage("Images/letter P.png")
  letterQ = loadImage("Images/letter Q.png")
  letterR = loadImage("Images/letter R.png")
  letterS = loadImage("Images/letter S.png")
  letterT = loadImage("Images/letter T.png")
  letterU = loadImage("Images/letter U.png")
  letterV = loadImage("Images/letter V.png")
  letterW = loadImage("Images/letter W.png")
  letterX = loadImage("Images/letter X.png")
  letterY = loadImage("Images/letter Y.png")
  letterZ = loadImage("Images/letter Z.png")

  gunIMG = loadImage("Images/watergun.png")
}

function setup() {
  database = firebase.database()
  createCanvas(displayWidth - 20, displayHeight - 20);

  gun = createSprite(width/2, height - 200, 1, 1)
  gun.addImage(gunIMG)
  gun.scale = 0.2;
}

function draw() {

  if(gameState === 0){
    background(gameBackground)

    game = new Game()
    game.getState()
    game.start()
    player.getCount()
    player.updateCount()

    gun.visible = false;
    bullet.visible = false;
  }

  if(gameState != 0){
    background(homeBackground);
  }

  if(playerCount === 2){
    gameState = 1
    console.log("hi")
  }

  bullet = createSprite(gun.x, gun.y, 10, 50)
  bullet.visible = false;

  if(gameState === 1){
    gun.visible = true;

    if(keyDown(UP_ARROW)){
      bullet.visible = true;
      bullet.velocityY = - 15;
    }

    gun.x = mouseX
    
  }

  if(questionNum == 0 && gameState === 1){
    image1(letterH, 100, 150, 50, 50)
    
    image2(letterE, 175, 150, 50, 50)
    
    image3(letterL, 250, 150, 50, 50)
    
    image4(letterL, 315, 150, 50, 50)

    image5(letterL, 400, 150, 50, 50)

    image6(letterO, 475, 150, 50, 50)
  }

  if(bullet.collide())

  if(questionNum == 1 && gameState === 1){
    image(letterG, 100, 150, 50, 50)
    
    image(letterO, 175, 150, 50, 50)
    
    image(letterO, 250, 150, 50, 50)
    
    image(letterD, 315, 150, 50, 50)

    image(letterB, 400, 150, 50, 50)

    image(letterE, 475, 150, 50, 50)

    image(letterY, 550, 150, 50, 50)

    image(letterE, 615, 150, 50, 50)
  }  

  if(questionNum == 2 && gameState === 1){
    image(letterE, 100, 150, 50, 50)
    
    image(letterL, 175, 150, 50, 50)
    
    image(letterE, 250, 150, 50, 50)
    
    image(letterP, 315, 150, 50, 50)

    image(letterH, 400, 150, 50, 50)

    image(letterA, 475, 150, 50, 50)

    image(letterE, 550, 150, 50, 50)

    image(letterN, 615, 150, 50, 50)

    image(letterT, 700, 150, 50, 50)
  } 

  if(questionNum == 3 && gameState === 1){
    image(letterQ, 100, 150, 50, 50)
    
    image(letterU, 175, 150, 50, 50)
    
    image(letterE, 250, 150, 50, 50)
    
    image(letterS, 315, 150, 50, 50)

    image(letterT, 400, 150, 50, 50)

    image(letterS, 475, 150, 50, 50)

    image(letterH, 550, 150, 50, 50)

    image(letterI, 615, 150, 50, 50)

    image(letterO, 700, 150, 50, 50)
    
    image(letterN, 775, 150, 50, 50)
  } 

  bullet.collide()
  
  drawSprites();
}