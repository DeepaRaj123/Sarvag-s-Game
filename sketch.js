var bg,bgImg,bg1Img,bg1,bg2Img,skyImg,winImg;
var logo,logoImg,playbutton,playbuttonImg,infobutton,infobuttonImg;
var playerImg1,playerImg2,playerImg3,playerImg4,playerImg5;
var popup1,poup1Img;
var gameover,gameoverImg,gamewin,gamewinImg;
var gameState = "start";
var timer1=20,score=0,timer2=0;
var spotlogo,spotlogoImg,spot1Img,scoreboard,scoreboardImg,timer,timerImg;
var anwser1,answer2,answer3,answer4,answer5,answer6,answer7,answerImg;
var wrong1,wrong2,wrong3,wrong4,wrongImg;
var beans,beansImg,beans1Img,beans2Img,magictimer=0,bird,birdImg,board,boardImg;
var egg,eggboard,bird1,bird2,eggcount=15,eggImg,eggboardImg,bird1Img,bird2Img,eggGroup,rand;
var leveltimer = 0,youwin,youwinImg,egg1,egg1Img,youlose,youloseImg;
var howtoplay,howtoplayImg;
var buttonclicksound,themesound,answersound,wrongsound,gameoversound,gamewinsound,gamewinsound1,jumpsound,birdsound,beansound;

function preload(){
  bgImg = loadImage('bg4.jpg')
  bg1Img = loadImage('bg1.jpg')
  bg2Img = loadImage('level1bg.jpg');
  skyImg = loadImage('sky.png');
 // winImg = loadImage('bg4.jfif')
  logoImg = loadImage('logo2.png')
  playbuttonImg = loadImage('playbutton3.png')
  infobuttonImg = loadImage('infobutton2.png')
  playerImg1 = loadAnimation('png/Idle (1).png','png/Idle (2).png','png/Idle (3).png','png/Idle (4).png','png/Idle (5).png','png/Idle (6).png','png/Idle (7).png','png/Idle (8).png','png/Idle (9).png','png/Idle (10).png');
  playerImg2 = loadAnimation('png/Dead (1).png','png/Dead (2).png','png/Dead (3).png','png/Dead (4).png','png/Dead (5).png','png/Dead (6).png','png/Dead (7).png','png/Dead (8).png','png/Dead (9).png','png/Dead (10).png');
  playerImg3 = loadAnimation('png/Jump (1).png','png/Jump (2).png','png/Jump (3).png','png/Jump (4).png','png/Jump (5).png','png/Jump (6).png','png/Jump (7).png','png/Jump (8).png','png/Jump (9).png','png/Jump (10).png');
  playerImg4 = loadAnimation('png/Run (1).png','png/Run (2).png','png/Run (3).png','png/Run (4).png','png/Run (5).png','png/Run (6).png','png/Run (7).png','png/Run (8).png');
 // playerImg5 = loadAnimation('png/Slide (1).png','png/Slide (2).png','png/Slide (3).png','png/Slide (4).png','png/Slide (5).png');
  //gameoverImg = loadImage("GameOver.png");
  poup1Img = loadImage("jack.png");
  spotlogoImg = loadImage("spotlogo.png");
  spot1Img = loadImage("spot3.jpg");
  timerImg = loadImage("timer.png");
  scoreboardImg = loadImage("scoreboard.png");
  answerImg = loadImage("answer.png");
  wrongImg = loadImage("wrong.png");
  gameoverImg = loadImage("Game Over1.png");
  gamewinImg = loadImage("gamewin.png");
  beansImg = loadImage("beans.png");
  beans1Img = loadImage("beans1.png");
  beans2Img = loadImage("beanstalk1.png");
  boardImg = loadImage("board.png");
  birdImg = loadImage("bird.gif");
  birdImg = loadImage("bird.gif");
  eggImg = loadImage("GoldenEgg.gif");
  eggboardImg = loadImage("eggboard.png");
  bird1Img = loadImage("bird1.gif");
  bird2Img = loadImage("bird2.gif");
  egg1Img = loadImage("Egg.gif");
  youwinImg = loadImage("youwin.png");
  youloseImg = loadImage("gameover1.png");
  howtoplayImg = loadImage("HOWTOPLAY.png");
  buttonclicksound = loadSound("buttonclick.wav");
  themesound = loadSound("theme.mp3");
  answersound = loadSound("answer.mp3");
  wrongsound = loadSound("wrong.mp3");
  gameoversound = loadSound("gameover1.wav");
  gamewinsound = loadSound("gamewin.mp3");
  jumpsound = loadSound("jump.wav");
  birdsound = loadSound("bird.wav");
  beansound = loadSound("plant.mp3");
  gamewinsound1 = loadSound("gamewin1.wav");

}

function setup(){
  createCanvas(windowWidth, windowHeight);

  logo = createSprite(windowWidth/2,windowHeight/2-50);
  logo.addImage(logoImg);
  logo.scale = 1.5;
  logo.visible = false;

  playbutton = createSprite(windowWidth/2,windowHeight/2+220);
  playbutton.addImage(playbuttonImg);
  playbutton.scale = 0.5;
  playbutton.visible = false;

  infobutton = createSprite(width-70,windowHeight/2+250);
  infobutton.addImage(infobuttonImg);
  infobutton.scale = 0.8;
  infobutton.visible = false;

  popup1=createSprite(width/2,height/2-100);
  popup1.addImage(poup1Img);
  popup1.scale = 0.25;

  spotlogo=createSprite(width/2,height/2-250);
  spotlogo.addImage(spotlogoImg);
  spotlogo.scale = 0.7;

  imagesprite=createSprite(width/2+20,height-200);
  imagesprite.addImage(spot1Img);
  imagesprite.scale = 1.6;

  timer=createSprite(width-70,100);
  timer.addImage(timerImg);
  timer.scale = 0.07;

  scoreboard=createSprite(width-200,100);
  scoreboard.addImage(scoreboardImg);
  scoreboard.scale = 0.07;

  answer1=createSprite(310,height/2+80);
  answer1.addImage(answerImg);
  answer1.scale = 0.3;

  answer2=createSprite(width/2-40,height/2+80);
  answer2.addImage(answerImg);
  answer2.scale = 0.3;

  answer3=createSprite(width/2-280,height/2);
  answer3.addImage(answerImg);
  answer3.scale = 0.3;

  answer4=createSprite(width/2-290,height-180);
  answer4.addImage(answerImg);
  answer4.scale = 0.3;

  answer5=createSprite(width/2-120,height-180);
  answer5.addImage(answerImg);
  answer5.scale = 0.3;

  answer6=createSprite(width/2-210,height-110);
  answer6.addImage(answerImg);
  answer6.scale = 0.12;

  answer7=createSprite(width/2-210,height-70);
  answer7.addImage(answerImg);
  answer7.scale = 0.12;

  wrong1=createSprite(310,height/2);
  wrong1.addImage(wrongImg);
  wrong1.scale = 0.3;

  wrong2=createSprite(600,height/2);
  wrong2.addImage(wrongImg);
  wrong2.scale = 0.3;

  wrong3=createSprite(280,height-100);
  wrong3.addImage(wrongImg);
  wrong3.scale = 0.3;

  wrong4=createSprite(670,height-100);
  wrong4.addImage(wrongImg);
  wrong4.scale = 0.3;

  gameover=createSprite(width/2,height/2);
  gameover.addImage(gameoverImg);
  gameover.scale = 0.35;

  gamewin=createSprite(width/2,height/2);
  gamewin.addImage(gamewinImg);
  gamewin.scale = 0.35;

  beans=createSprite(width/2,height-100);
  beans.addImage(beansImg);
  beans.scale = 0.09;

  board=createSprite(width-50,120);
  board.addImage(boardImg);
  board.scale = 0.15;

  bird=createSprite(width,50);
  bird.addImage(birdImg);
  bird.scale = 0.35;

  eggboard=createSprite(200,100);
  eggboard.addImage(eggboardImg);
  eggboard.scale = 0.15;

  egg1=createSprite(width/2,height-100);
  egg1.addImage(egg1Img);
  egg1.scale = 0.25;

  youwin=createSprite(width/2,height/2-200);
  youwin.addImage(youwinImg);
  youwin.scale = 0.25;

  youlose=createSprite(width/2,height/2);
  youlose.addImage(youloseImg);
  youlose.scale = 0.3;

  howtoplay=createSprite(width-200,height/2+60);
  howtoplay.addImage(howtoplayImg);
  howtoplay.scale = 0.2;

  player = createSprite(windowWidth/2-400,windowHeight-200);
  player.addAnimation("standing",playerImg1);
  player.addAnimation("jumping",playerImg3);
  player.addAnimation("running",playerImg4);
  //player.addAnimation("sliding",playerImg5);
  player.addAnimation("dead",playerImg2);

  player.scale = 0.5;


  bird.visible = false;
  board.visible = false;
  player.visible = false;
  beans.visible = false;
  gameover.visible = false;
  gamewin.visible = false;
  popup1.visible = false;
  spotlogo.visible = false;
  imagesprite.visible = false;
  timer.visible = false;
  scoreboard.visible = false;
  answer1.visible = false;
  answer2.visible = false;
  answer3.visible = false;
  answer4.visible = false;
  answer5.visible = false;
  answer6.visible = false;
  answer7.visible = false;
  wrong1.visible = false;
  wrong2.visible = false;
  wrong3.visible = false;
  wrong4.visible = false;
  eggboard.visible = false;
  egg1.visible = false;
  youwin.visible = false;
  youlose.visible = false;
  howtoplay.visible = false;

  wrong2.setCollider("rectangle",0,0,700,wrong2.height-50)
  wrong3.setCollider("rectangle",0,0,300,600)
  wrong4.setCollider("rectangle",0,0,300,600)
  gameover.setCollider("circle",680,270,190);
  gamewin.setCollider("circle",-50,-400,165);
  youlose.setCollider("circle",55,495,140);
  howtoplay.setCollider("circle",850,-600,140);

  eggGroup = createGroup();
  bird1Group = createGroup();

}

function draw() {
  if(gameState==="start")
  {
    background(bgImg);
    logo.visible = true;
    playbutton.visible = true;
    infobutton.visible = true;
    if(mousePressedOver(infobutton))
    {
      buttonclicksound.play();
      howtoplay.visible = true;
    }
    if(mousePressedOver(howtoplay))
    {
      buttonclicksound.play();
      howtoplay.visible = false;
    }
    if(mousePressedOver(playbutton))
    {
      buttonclicksound.play();
      gameState = "home";
      themesound.play();
      themesound.setVolume(0.5);
    }

  }

  else if(gameState==="home")
  {
    background(bg1Img);
    logo.visible = false;
    playbutton.visible = false;
    infobutton.visible = false;
    player.visible = true;
    popup1.visible = true;
    if(mousePressedOver(popup1))
    {
      buttonclicksound.play();
      gameState="level1";
     
      popup1.visible = false;
      player.x = 195;
      player.y =height/2-155;
    }

  }

  else if(gameState==="level1")
  {
  background(bg2Img);
  player.changeAnimation("standing",playerImg1);
  spotlogo.visible = true;
  imagesprite.visible = true;
  timer.visible = true;
  scoreboard.visible = true;
  timer2++;
  if(timer2%30===0&&timer1!=0)
  {
    timer1--;
  }
 
  if(mousePressedOver(answer1))
  {
    answersound.play();
    answer1.visible = true;
    score=score+1;
  }
  if(mousePressedOver(answer2))
  {
    answersound.play();
    answer2.visible = true;
    score=score+1;
  }
  if(mousePressedOver(answer3))
  {
    answersound.play();
    answer3.visible = true;
    score=score+1;
  }
  if(mousePressedOver(answer4))
  {
    answersound.play();
    answer4.visible = true;
    score=score+1;
  }
  if(mousePressedOver(answer5))
  {
    answersound.play();
    answer5.visible = true;
    score=score+1;
  }
  if(mousePressedOver(answer6))
  {
    answersound.play();
    answer6.visible = true;
    score=score+1;
  }
  if(mousePressedOver(answer7))
  {
    answersound.play();
    answer7.visible = true;
    score=score+1;
  }
  if(mousePressedOver(wrong1))
  {
    wrongsound.play();
    wrong1.visible = true;
    score=score-1;
  }
  if(mousePressedOver(wrong2))
  {
    wrongsound.play();
    wrong2.visible = true;
    score=score-1;
  }
  if(mousePressedOver(wrong3))
  {
    wrongsound.play();
    wrong3.visible = true;
    score=score-1;
  }
  if(mousePressedOver(wrong4))
  {
    wrongsound.play();
    wrong4.visible = true;
    score=score-1;
  }
  if(timer1===0&&score!=20)
  {
    gameoversound.loop();
    gameover.visible = true;
    imagesprite.visible = false;
    answer1.visible = false;
    answer2.visible = false;
    answer3.visible = false;
    answer4.visible = false;
    answer5.visible = false;
    answer6.visible = false;
    answer7.visible = false;
    wrong1.visible = false;
    wrong2.visible = false;
    wrong3.visible = false;
    wrong4.visible = false;
    player.changeAnimation("dead",playerImg2);

  }
  if(score>=20&&timer1!=0)
  {
    gamewinsound.loop();
    gamewin.visible = true;
    imagesprite.visible = false;
    answer1.visible = false;
    answer2.visible = false;
    answer3.visible = false;
    answer4.visible = false;
    answer5.visible = false;
    answer6.visible = false;
    answer7.visible = false;
    wrong1.visible = false;
    wrong2.visible = false;
    wrong3.visible = false;
    wrong4.visible = false;
    player.changeAnimation("jumping",playerImg3);

  }
  if(mousePressedOver(gameover))
  {
    gameoversound.stop();
    buttonclicksound.play();
    player.changeAnimation("standing",playerImg1);
    gameover.visible = false;
    imagesprite.visible = true;
    score=0;
    timer1=20;
    timer2=0;
  }
  if(mousePressedOver(gamewin))
  {
    gamewinsound.stop();
    buttonclicksound.play();
    gamewin.visible = false;
    spotlogo.visible = false;
    imagesprite.visible = false;
    timer.visible = false;
    scoreboard.visible = false; 
    gameState="level1home";
    player.x = windowWidth/2-400;
    player.y = windowHeight-200;
    player.changeAnimation("standing",playerImg1);
  }
  }
  else if(gameState==="level1home")
  {
    
    background(bg1Img);
    magictimer++;
    beans.visible = true;
    bird.visible = true;
    board.visible=true;
    bird.velocityX = -2;
    board.x = bird.x -50;
    board.y = bird.y+70;
    if(magictimer===200)
    {
      beansound.play();
      beans.addImage(beans1Img);
      beans.scale = 1.5;
      beans.y = height-350;
    }
    if(player.y <=-100)
    {

      gameState="level2";
      player.x = windowWidth/2-400;
      player.y = windowHeight-200; 
      bird.visible = false;
      board.visible=false;  
      beans.y = height-250;
    
     }

  }
  else if(gameState==="level2")
  {
    background(skyImg);
    beans.scale = 2;
    beans.velocityY = 2;
    beans.addImage(beans2Img);
    eggboard.visible = true;
    spawnEggs();
    spawnbirds();
    for(var i=0;i<eggGroup.length;i++)
    {
    if(player.isTouching(eggGroup.get(i)))
    {
      answersound.play();
      eggGroup.get(i).destroy();
      eggcount = eggcount + 1;
    }
  }
  for(var i=0;i<bird1Group.length;i++)
  {
  if(player.isTouching(bird1Group.get(i)))
  {
    player.x = bird1Group.get(i).x;
    player.y = bird1Group.get(i).y;

    leveltimer++;
 
  }

}
if(leveltimer>=300)
{
gameoversound.play();
bird1Group.destroyEach();
eggGroup.destroyEach();
youlose.visible = true;
player.visible = false;
}
if(mousePressedOver(youlose))
{
gameoversound.stop();
buttonclicksound.play();
youlose.visible = false;
eggcount=19;
leveltimer=0;
player.visible = true;
gameState= "level2";
player.x = width/2;

}
if(eggcount===20)
{
  bird1Group.destroyEach();
  eggGroup.destroyEach();
  beans.destroy();
  eggboard.visible = false;
  gameState="win";
  gamewinsound1.play();
}
    if(beans.y>height-120)
    {
      beans.y = beans.width/2;
    }
  }
  else if(gameState==="win")
  {
    gamewin.play();
    background(bgImg);
    egg1.visible = true;
    youwin.visible = true;
    player.x = width/2-100;
    player.y = height/2+100;
    player.changeAnimation("jumping",playerImg3);

  }
  if(keyDown("right_arrow"))
  {
    player.x = player.x+5;
    player.changeAnimation("running",playerImg4);
  }
  if(keyDown("left_arrow"))
  {
    player.x = player.x-5;
  }
  if(keyDown("up_arrow"))
  {
    jumpsound.play();
    player.y = player.y-5;
    player.changeAnimation("jumping",playerImg3);
  }
  if(keyDown("down_arrow"))
  {
    player.y = player.y+5;
  }

drawSprites();
text(rand,50,height/2)
if(gameState==="level1")
  {
    textSize(40);
    fill("yellow");
    textFont('Georgia');
    text(timer1,timer.x-20,timer.y+22);
    textSize(60);
    fill("white");
    text(score,scoreboard.x-20,scoreboard.y+22)
  }
  else if(gameState==="level2")
  {
    textSize(40);
    fill("yellow");
    text(eggcount+" /20",eggboard.x+10,eggboard.y+22)
  }
}

function spawnEggs()
{
  if(frameCount%150===0)
  {
    egg = createSprite(width/2,100);
    egg.addImage(eggImg);
    egg.scale = 0.25;
    rand = Math.round(random(0,1));
    egg.velocityY = 2;
    switch(rand)
    {
      case 0:       egg.x = width/2-50; break;
      case 1:       egg.x = width/2+50; break;

    }
  
    eggGroup.add(egg);

  }

}

function spawnbirds()
{
  if(frameCount%250===0)
  {
    bird1 = createSprite(width,100);
    bird1.scale = 0.25;
    var rand1 = Math.round(random(0,1));
    bird1.y = random(100,height-100);
    switch(rand1)
    {
      case 0:       bird1.x = width;
                    bird1.velocityX = -4;
                    bird1.addImage(bird1Img);
                    bird1.scale = 0.25;
      
      break;
      case 1:       
      bird1.x = 50;
      bird1.velocityX = 4;
      bird1.addImage(bird2Img);
      bird1.scale = 1.2;
      break;

    }
  
    bird1Group.add(bird1);

  }

}