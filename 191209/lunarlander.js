let x = 40;
let y = 0;
let speed = 2;
let b = false;

function rocket() {
  noStroke();
  fill(238, 0, 0);

  beginShape();
  curveVertex(x + 50, y + 50);
  curveVertex(x + 50, y + 40);
  curveVertex(x + 30, y + 90);
  curveVertex(x + 45, y + 150);
  curveVertex(x + 45, y + 150);
  endShape();

  beginShape();
  curveVertex(x + 50, y + 50);
  curveVertex(x + 50, y + 40);
  curveVertex(x + 70, y + 90);
  curveVertex(x + 55, y + 150);
  curveVertex(x + 45, y + 150);
  endShape();

  beginShape();
  curveVertex(x + 65, y + 120);
  curveVertex(x + 60, y + 125);
  curveVertex(x + 65, y + 120);
  curveVertex(x + 85, y + 130);
  curveVertex(x + 90, y + 150);
  curveVertex(x + 90, y + 150);
  endShape();

  beginShape();
  curveVertex(x + 40, y + 120);
  curveVertex(x + 40, y + 125);
  curveVertex(x + 40, y + 120);
  curveVertex(x + 15, y + 130);
  curveVertex(x + 10, y + 150);
  curveVertex(x + 10, y + 150);
  endShape();

  triangle(x + 43, y + 150, x + 57, y + 150, x + 50, y + 40);
  fill(255, 69, 0);
  ellipse(x + 50, y + 70, 15);
  triangle(x + 45, y + 160, x + 55, y + 160, x + 50, y + 190);
}

function draw() {
  clear();
  background(30, 30, 30);
  textSize(20);
  text("✨", 80, 230);
  text("✨", 150, 150);
  text("✨", 250, 70);
  text("✨", 30, 50);
  text("✨", 450, 350);
  text("✨", 550, 20);
  text("✨", 0, 550);
  text("✨", 30, 460);
  text("✨", 10, 130);
  text("✨", 530, 480);
  text("✨", 300, 400);
  text("✨", 230, 280);
  text("✨", 100, 330);
  text("✨", 130, 430);
  text("✨", 130, 430);
  text("✨", 320, 160);
  text("✨", 450, 130);
  text("✨", 550, 240);
  text("✨", 450, 430);
  text("✨", 300, 530);

  //Button
  noStroke();
  fill(200, 200, 200);
  rect(345, 15, 100, 50, 20); //Start Button grau
  rect(455, 15, 100, 50, 20); //Neustart Button grau
  fill(255);
  rect(340, 10, 100, 50, 20); //Start Button
  rect(450, 10, 100, 50, 20); //Neustart Button
  //Button Beschriftung
  textFont("Georgia");
  fill(0);
  textSize(20);
  text("Start", 365, 40);
  text("Neustart", 460, 40);
  fill(255);

  //Boden
  fill(245, 245, 220);
  ellipse(300, 800, 800, 500);

  // //Landefläche
  // fill(25);
  // ellipse(300, 600, 220, 80);
  // textFont("Georgia");
  // fill(255);
  // textSize(60);
  // text("P", 280, 620);

  //Rakete
  rocket(x, y);
  if (b === true) {
    y = y + speed;
    speed = speed + 0.3;
  }

  //Start
  if (
    mouseIsPressed &&
    mouseX >= 340 &&
    mouseX <= 430 &&
    mouseY >= 10 &&
    mouseY <= 50
  ) {
    b = true;
  }
  //Neustart
  if (
    mouseIsPressed &&
    mouseX >= 450 &&
    mouseX <= 550 &&
    mouseY >= 10 &&
    mouseY <= 50
  ) {
    x = 100;
    y = 100;
    speed = 3;
    b = true;
  }

  //Bewegungsbereich
  if (y >= 450) {
    y = 450;
    b = false;
    if (speed <= 6) {
      textFont("Georgia");
      textSize(30);
      noStroke();
      text("Erfolgreiche Landung!", 200, 200);
      textSize(60);
      text("👏", 350, 310);
    }
    if (speed >= 6) {
      textSize(400);
      text("💥", 150, 400);
      textSize(70);
      stroke(255, 215, 0);
      strokeWeight(15);
      text("CRASH!", 100, 350);
    }
  }

  if (x >= 500) {
    x = 500;
  }
  if (x <= 10) {
    x = 10;
  }

  //Steuerung
  //oben
  if (keyIsDown(38)) {
    speed = speed - 1.5;
  }
  //rechts
  if (keyIsDown(39)) {
    x = x + 3;
  }
  //links
  if (keyIsDown(37)) {
    x = x - 3;
  }
  console.log(speed);
}
