let img1 = loadImage("startscreen.png");
let img2 = loadImage("howtoplay.png");
let img3 = loadImage("cup.png");
let img4 = loadImage("endscreen.png");

let start = false;
let howto = false;
let b = false;

let playermode = true;
let multi = false;
let singlemode = false;

let enterone = true;
let entertwo = true;
let playerone = [];
let playeroneWrite = false;
let playertwoWrite = false;
let playertwo = [];
let KeyTime = 0;

let pause = false;

let beer = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  x3: 0,
  y3: 0,
  x4: 0,
  y4: 0
};

let size = 0;
let sizedown = 0;
let chugtext = false;
let chugminigame = false;
let scoreleft = 0;
let scoreright = 0;

let leftcup = {
  x: 80,
  y: 105,
  speed: 0
};
let rightcup = {
  x: 730,
  y: 105,
  speed: 0
};
let cupsleft = [
  (one = { x: 140, y: 315, filled: true }),
  (two = { x: 110, y: 332, filled: true }),
  (three = { x: 110, y: 300, filled: true }),
  (four = { x: 80, y: 347, filled: true }),
  (five = { x: 80, y: 315, filled: true }),
  (six = { x: 80, y: 284, filled: true }),
  (seven = { x: 50, y: 362, filled: true }),
  (eight = { x: 50, y: 330, filled: true }),
  (nine = { x: 50, y: 299, filled: true }),
  (ten = { x: 50, y: 268, filled: true })
];
let cupsright = [
  (one = { x: 670, y: 315, filled: true }),
  (two = { x: 700, y: 332, filled: true }),
  (three = { x: 700, y: 300, filled: true }),
  (four = { x: 730, y: 347, filled: true }),
  (five = { x: 730, y: 315, filled: true }),
  (six = { x: 730, y: 284, filled: true }),
  (seven = { x: 760, y: 362, filled: true }),
  (eight = { x: 760, y: 330, filled: true }),
  (nine = { x: 760, y: 299, filled: true }),
  (ten = { x: 760, y: 268, filled: true })
];
let ball = {
  x: 395,
  y: 320,
  speed: 5,
  speedX: 5,
  speedY: 5,
  d: 15
};

//Möglicher Ansatz für Winkel, aus YouTube Tutorial von CodeExplained
// let collisionpoint = ((ball.y-ball.d/2) - (leftcup.y + 25));
// let winkel = collisionpoint * (Math.Pi / 4);
// collisionpoint = collisionpoint / 25;
// ball.speedX = ball.speed * Math.cos(winkel);
// ball.speedY = ball.speed * Math.sin(winkel);
// ball.speed += 0.1;

function startscreen() {
  image(img1, 220, 40, img1.width / 1.2, img1.height / 1.2);
  noFill();
}
function choosemode() {
  noFill();
  stroke(255);
  rect(80, 520, 270, 50);
  fill(255);
  textSize(20);
  noStroke();
  text("single player", 160, 550);

  noFill();
  stroke(255);
  rect(430, 520, 270, 50);
  fill(255);
  textSize(20);
  noStroke();
  text("multi player", 520, 550);
}

function enternames() {
  if (enterone === true) {
    fill(255);
    textSize(20);
    noStroke();
    text("enter name", 160, 550);
  }
  if (entertwo === true) {
    fill(255);
    textSize(20);
    noStroke();
    text("enter name", 520, 550);
  }
  noFill();
  stroke(255);
  rect(80, 520, 270, 50);
  rect(430, 520, 270, 50);
}
function player(x1, y1, x2, y2) {
  textSize(40);
  textAlign(LEFT);
  fill(255, 127, 36);
  stroke(255);
  strokeWeight(3);
  if (
    playeroneWrite === true &&
    keyIsPressed === true &&
    keyCode != 8 &&
    keyCode != 32 &&
    keyCode != 16 &&
    playerone.length <= 9 &&
    KeyTime > 4
  ) {
    KeyTime = 0;
    playerone.push(key);
  }
  if (
    playeroneWrite === true &&
    keyIsPressed === true &&
    keyCode === 8 &&
    playerone.length >= 0 &&
    KeyTime > 4
  ) {
    KeyTime = 0;
    playerone.pop();
  }

  if (
    playertwoWrite === true &&
    keyIsPressed === true &&
    keyCode != 8 &&
    keyCode != 32 &&
    keyCode != 16 &&
    playertwo.length <= 10 &&
    KeyTime > 4
  ) {
    KeyTime = 0;
    playertwo.push(key);
  }
  if (
    playertwoWrite === true &&
    keyIsPressed === true &&
    keyCode === 8 &&
    playertwo.length >= 0 &&
    KeyTime > 5
  ) {
    KeyTime = 0;
    playertwo.pop();
    // preventDefault();
    // return false;
  }
  text(playerone.join(""), x1, y1);
  text(playertwo.join(""), x2, y2);
  KeyTime++;
}
function youwonleft() {
  textSize(40);
  textAlign(LEFT);
  fill(255, 127, 36);
  stroke(255);
  strokeWeight(3);
  text("YOU WON!", 80, 500);
}
function youwonright() {
  textSize(40);
  textAlign(LEFT);
  fill(255, 127, 36);
  stroke(255);
  strokeWeight(3);
  text("YOU WON!", 500, 500);
}
function howtoplay() {
  image(img2, 180, 23, img2.width / 5, img2.height / 5);
  textSize(15);
  fill(255);
  noStroke();
  text("BACK", 60, 60);
}
function endscreen() {
  image(img4, 223, 40, img1.width / 1.2, img1.height / 1.2);
}
function mousePressed() {
  //button start the game
  if (
    start === false &&
    mouseX >= 370 &&
    mouseX <= 420 &&
    mouseY >= 275 &&
    mouseY <= 325
  ) {
    start = true;
    playeroneWrite = false;
    playertwoWrite = false;
    playermode = false;
  }
  //button how to play
  if (
    start === false &&
    mouseX >= 355 &&
    mouseX <= 440 &&
    mouseY >= 400 &&
    mouseY <= 450
  ) {
    howto = true;
    b = false; //back button nicht sichtbar
  }
  //button back
  if (
    start === false &&
    mouseX >= 60 &&
    mouseX <= 105 &&
    mouseY >= 40 &&
    mouseY <= 70
  ) {
    b = true;
  }
  //button play again
  if (
    start === true &&
    mouseX >= 340 &&
    mouseX <= 450 &&
    mouseY >= 370 &&
    mouseY <= 410
  ) {
    start = false;
    reset();
  }
  //Button single player
  if (
    start === false &&
    multi === false &&
    mouseX >= 80 &&
    mouseX <= 350 &&
    mouseY >= 520 &&
    mouseY <= 570
  ) {
    singlemode = true;
  }
  //Button multi player
  if (
    start === false &&
    multi === false &&
    mouseX >= 430 &&
    mouseX <= 700 &&
    mouseY >= 520 &&
    mouseY <= 570
  ) {
    multi = true;
  }
  //Button playeroneWrite
  if (
    playermode === false &&
    start === false &&
    multi === true &&
    mouseX >= 80 &&
    mouseX <= 350 &&
    mouseY >= 520 &&
    mouseY <= 570
  ) {
    enterone = false;
    if (playeroneWrite === false) {
      playeroneWrite = true;
      playertwoWrite = false;
    } else {
      playeroneWrite = false;
    }
  }
  //Button playertwoWrite
  if (
    playermode === false &&
    start === false &&
    multi === true &&
    mouseX >= 430 &&
    mouseX <= 700 &&
    mouseY >= 520 &&
    mouseY <= 570
  ) {
    entertwo = false;
    if (playertwoWrite === false) {
      playertwoWrite = true;
      playeroneWrite = false;
    } else {
      playertwoWrite = false;
    }
  }
  //Button restart
  if (
    start === true &&
    mouseX >= 730 &&
    mouseX <= 800 &&
    mouseY >= 45 &&
    mouseY <= 65
  )
    start = false;
  cupsreset();
  chugminigame = false;
  playermode = true;
}
function cupsreset() {
  for (i = 0; i < cupsleft.length; i++) {
    cupsleft[i].filled = true;
  }
  for (i = 0; i < cupsright.length; i++) {
    cupsright[i].filled = true;
  }
  scoreleft = 0;
  scoreright = 0;
}
function cupleft() {
  stroke(220, 0, 0);
  rect(leftcup.x, leftcup.y, 2, 50);
  fill(220, 0, 0);
  quad(
    leftcup.x,
    leftcup.y + 47,
    leftcup.x - 50,
    leftcup.y + 37,
    leftcup.x - 50,
    leftcup.y + 12,
    leftcup.x,
    leftcup.y + 3
  );
  leftcup.y = leftcup.y + leftcup.speed;
  //Begrenzung cupleft
  if (leftcup.y <= 105) {
    leftcup.y = 105;
  }
  if (leftcup.y >= 475) {
    leftcup.y = 475;
  }
}
function cupright() {
  rect(rightcup.x, rightcup.y, 2, 50);
  fill(220, 0, 0);
  quad(
    rightcup.x + 1,
    rightcup.y + 47,
    rightcup.x + 50,
    rightcup.y + 37,
    rightcup.x + 50,
    rightcup.y + 12,
    rightcup.x + 1,
    rightcup.y + 3
  );
  rightcup.y = rightcup.y + rightcup.speed;
  //Begrenzung cupright
  if (rightcup.y >= 475) {
    rightcup.y = 475;
  }
  if (rightcup.y <= 105) {
    rightcup.y = 105;
  }
}
function beerleft() {
  //Bierfüllung links
  for (i = 0; i < cupsleft.length; i++) {
    if (cupsleft[i].filled === true) {
      fill(255, 215, 0);
      ellipse(cupsleft[i].x, cupsleft[i].y, 25);
    } else {
      fill(0);
      ellipse(cupsleft[i].x, cupsleft[i].y, 25);
    }
  }
}
function beerright() {
  //Bierfüllung rechts
  for (i = 0; i < cupsright.length; i++) {
    if (cupsright[i].filled === true) {
      fill(255, 215, 0);
      ellipse(cupsright[i].x, cupsright[i].y, 25);
    } else {
      fill(0);
      ellipse(cupsright[i].x, cupsright[i].y, 25);
    }
  }
}
function tisch() {
  strokeWeight(4);
  stroke(255);
  noFill();
  rect(10, 100, 800, 430);
}
function mittellinie() {
  line(395, 100, 395, 530);
}
function score() {
  textSize(80);
  text(scoreleft, 310, 100);
  text(":", 380, 100);
  text(scoreright, 430, 100);
}
function keyPressed() {
  if (keyCode === 32) {
    beer.x1 += 0.8;
    beer.y1 += 7;
    beer.x2 -= 0.8;
    beer.y2 += 7;
    size += 6;
  }
}
function puck() {
  noStroke();
  fill(255, 127, 36);
  ellipse(ball.x, ball.y, ball.d);
  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;
  //Begrenzung oben/unten
  if (ball.y + ball.d / 2 >= 530 || ball.y - ball.d / 2 <= 100) {
    ball.speedY = -ball.speedY;
  }

  //Ball trifft rechten Cup
  //Durchmesser meines Balls ist 15 aber ich nehme 8 als den "Radius" damit die hitbox etwas größer ist und bei ball.d/2 hat er gebugt
  if (
    ball.x + 8 >= 730 &&
    ball.x + 8 <= 731 + ball.speedX &&
    ball.y >= rightcup.y &&
    ball.y <= rightcup.y + 55 &&
    ball.speed > 0 //d.h. er fliegt von links nach rechts
  ) {
    ball.speedX += 0.5;
    ball.speedY += 0.5;
    ball.speedX = -ball.speedX;
  }
  //Ball fliegt hinter rechten Cup
  if (ball.x >= 810) {
    scoreright = scoreright + 1;
    cupsright[scoreright - 1].filled = false;
    chugminigame = true;
    pause = true;
    ball.speedX = 5; //ball.speed wird zurück gesetzt
    ball.speedX = -ball.speedX;
  }
  //Ball trifft linken Cup
  if (
    ball.x - 8 <= 85 &&
    ball.x - 8 >= 84 + ball.speedX &&
    ball.y >= leftcup.y &&
    ball.y <= leftcup.y + 50 &&
    ball.speedX < 0 //d.h. er fliegt von rechts nach links
  ) {
    ball.speedX = -ball.speedX;
    ball.speedX += 0.5;
    ball.speedY += 0.5;
  } else if (ball.x <= 20) {
    scoreleft = scoreleft + 1;
    cupsleft[scoreleft - 1].filled = false;
    chugminigame = true;
    pause = true;
    ball.speedX = -5;
    ball.speedX = -ball.speedX;
  }
}
function chug() {
  if (chugtext === true) {
    fill(255);
    textSize(size + 35);
    textAlign(CENTER);
    text("CHUG!", 395, 300);
    sizedown = 1;
    if (size >= -35) {
      size -= sizedown;
    }
  }
  //wenn ausgetrunken
  if (beer.y1 >= 200 && beer.y2 >= 200) {
    chugtext = false;
    beer.x1 = 0;
    beer.y1 = 0;
    beer.x2 = 0;
    beer.y2 = 0;
    chugminigame = false;
  }
}
function chugcup() {
  image(img3, 187, 20, img3.width / 3, img3.height / 3);
}
function chuggame() {
  if (pause === true) {
    timeout();
  }
  if (chugminigame === true) {
    chugcup();
    liquid();
    chugtext = true;
  }
  if (chugminigame === false) {
    if (cupsleft[9].filled === false || cupsright[9].filled === false) {
      endscreen();
      if (cupsleft[9].filled === false) {
        youwonright();
      }
      if (cupsright[9].filled === false) {
        youwonleft();
      }
    } else {
      pause = false;
      chugtext = false;
      size = 0;
    }
  }
  if (chugtext === true) {
    chug();
  } else {
    chugtext = false;
    size = 0;
  }
}
function liquid() {
  fill(255, 215, 0);
  quad(
    beer.x1 + 287,
    beer.y1 + 250,
    beer.x2 + 499,
    beer.y2 + 250,
    beer.x3 + 475,
    beer.y3 + 452,
    beer.x4 + 310,
    beer.y4 + 452
  );
}
function timeout() {
  if (pause === true) {
    ball.x = 395;
    ball.y = 320;
  }
}
function keyReleased() {
  if (
    playertwoWrite === true &&
    keyIsPressed === true &&
    keyCode === 8 &&
    playertwo.length >= 0 &&
    KeyTime > 5
  ) {
    KeyTime = 0;
    playertwo.pop();
  }
  // return false;
}
function controls() {
  //LINKS
  //Steuerung cupleft
  if (
    cupsleft[0].filled === true ||
    cupsleft[1].filled === true ||
    cupsleft[2].filled === true
  ) {
    if (keyIsDown(87)) {
      leftcup.speed = -9;
    } else if (keyIsDown(83)) {
      leftcup.speed = 9;
    } else leftcup.speed = 0;
  }
  //verlangsamt, wenn 3 oder 4 leer
  if (cupsleft[2].filled === false || cupsleft[3].filled === false) {
    if (keyIsDown(87)) {
      leftcup.speed = -4;
    } else if (keyIsDown(83)) {
      leftcup.speed = 4;
    } else leftcup.speed = 0;
  }
  //runter schnell/hoch langsam, wenn 5 oder 6 leer
  if (cupsleft[4].filled === false || cupsleft[5].filled === false) {
    if (keyIsDown(87)) {
      leftcup.speed = -1;
    } else if (keyIsDown(83)) {
      leftcup.speed = +8;
    } else leftcup.speed = 0;
  }
  // hoch schnell/runter langsam, wenn 7 leer
  if (cupsleft[6].filled === false) {
    if (keyIsDown(87)) {
      leftcup.speed = -8;
    } else if (keyIsDown(83)) {
      leftcup.speed = +1;
    } else leftcup.speed = 0;
  }
  //umgedrehte Steuerung, wenn 8 oder 9 leer
  if (cupsleft[7].filled === false || cupsleft[8].filled === false) {
    if (keyIsDown(87)) {
      leftcup.speed = +5;
    } else if (keyIsDown(83)) {
      leftcup.speed = -5;
    } else leftcup.speed = 0;
  }
  //RECHTS
  if (
    cupsright[0].filled === true ||
    cupsright[1].filled === true ||
    cupsright[2].filled === true
  ) {
    if (keyIsDown(38)) {
      rightcup.speed = -9;
    } else if (keyIsDown(40)) {
      rightcup.speed = 9;
    } else rightcup.speed = 0;
  }
  //verlangsamt, wenn 3 oder 4 leer
  if (cupsright[2].filled === false || cupsright[3].filled === false) {
    if (keyIsDown(38)) {
      rightcup.speed = -4;
    } else if (keyIsDown(40)) {
      rightcup.speed = 4;
    } else rightcup.speed = 0;
  }
  //runter schnell/hoch langsam, wenn 5 oder 6 leer
  if (cupsright[4].filled === false || cupsright[5].filled === false) {
    if (keyIsDown(38)) {
      rightcup.speed = -1;
    } else if (keyIsDown(40)) {
      rightcup.speed = +8;
    } else rightcup.speed = 0;
  }
  // hoch schnell/runter langsam, wenn 7 leer
  if (cupsright[6].filled === false) {
    if (keyIsDown(38)) {
      rightcup.speed = -8;
    } else if (keyIsDown(40)) {
      rightcup.speed = +1;
    } else rightcup.speed = 0;
  }
  //umgedrehte Steuerung, wenn 8 oder 9 leer
  if (cupsright[7].filled === false || cupsright[8].filled === false) {
    if (keyIsDown(38)) {
      rightcup.speed = +5;
    } else if (keyIsDown(40)) {
      rightcup.speed = -5;
    } else rightcup.speed = 0;
  }
}
function restartbutton() {
  textSize(15);
  fill(255);
  noStroke();
  text("RESTART", 730, 60);
}
function draw() {
  clear();

  if (start === false && howto === false && playermode === true) {
    startscreen();
    choosemode();
  }
  if (start === false && howto === false && singlemode === true) {
    startscreen();
    playermode = false;
  }
  if (multi === true) {
    startscreen();
    enternames();
    player(90, 560, 440, 560);
    playermode = false;
  }
  if (howto === true) {
    howtoplay();
  }
  if (b === true) {
    howto = false;
  }
  if (start === true) {
    multi = false;
    tisch();
    mittellinie();
    beerleft();
    beerright();
    player(120, 580, 520, 580);

    cupleft();
    cupright();

    controls();
    restartbutton();
    puck();
    chuggame();
  }
  console.log(multi);
}
