let rot = color(255, 0, 0);
let schwarz = color(0);
let activeR = false;
let activeS = false;
let textContent = "Start";
let rouletteTimePassed = false;
let farbe = [schwarz, rot];

let colorrect = farbe[0];

let rouletteActive = false;

let ergebnis = [];

//Button rot/schwarz
function button(x, y, farbe, active) {
  if (active) {
    stroke(255, 204, 0);
  }
  fill(farbe);
  rect(x, y, 80, 80);
  stroke(0);
}

function draw() {
  background(100, 100, 100);

  button(400, 50, schwarz, activeS);
  button(300, 50, rot, activeR);
  if (
    mouseIsPressed &&
    mouseX >= 400 &&
    mouseX <= 480 &&
    mouseY >= 50 &&
    mouseY <= 130
  ) {
    activeS = true;
    activeR = false;
  }
  if (
    mouseIsPressed &&
    mouseX >= 300 &&
    mouseX <= 380 &&
    mouseY >= 50 &&
    mouseY <= 130
  ) {
    activeR = true;
    activeS = false;
  }

  if (
    mouseIsPressed &&
    mouseX >= 300 &&
    mouseX <= 490 &&
    mouseY >= 200 &&
    mouseY <= 260 &&
    rouletteActive === false
  ) {
    rouletteActive = true;
    textContent = "Stop";
    // console.log("click start");
  }

  if (
    mouseIsPressed &&
    mouseX >= 300 &&
    mouseX <= 490 &&
    mouseY >= 200 &&
    mouseY <= 260 &&
    rouletteActive === true &&
    rouletteTimePassed == true
  ) {
    rouletteActive = false;
    rouletteTimePassed = false;
    textContent = "Start";
    // console.log("click stop");

    if (activeS && colorrect == schwarz) {
      console.log("GEWONNEN");
      ergebnis.push("GEWONNEN");
      activeS = false;
    } else if (activeR && colorrect == rot) {
      console.log("GEWONNEN");
      ergebnis.push("GEWONNEN");
      activeR = false;
    }
    if (activeS && colorrect == rot) {
      console.log("VERLOREN");
      ergebnis.push("VERLOREN");
      activeS = false;
    } else if (activeR && colorrect == schwarz) {
      console.log("VERLOREN");
      ergebnis.push("VERLOREN");
      activeR = false;
    }
    if (ergebnis > 10) {
      ergebnis.shift();
    }
    console.log(ergebnis);
  }
  roulette();

  // console.log(rouletteActive);

  //Start Button
  fill(255);
  textFont("Georgia");
  rect(300, 200, 190, 60, 20);

  //Text
  fill(0);
  textSize(50);
  text(textContent, 340, 245);
  textSize(20);
  text("Wähle eine Farbe", 100, 100);
  text("Dein Ergebnis", 100, 400);

  // console.log(activeS);
  // console.log(colorrect == rot);
}

//Roulette
function roulette() {
  if (rouletteActive) {
    colorrect = random(farbe);
    setTimeout(function() {
      rouletteTimePassed = true;
    }, 200);
  } else {
  }
  // console.log(colorrect);

  fill(colorrect);
  rect(300, 350, 190, 190);
}
