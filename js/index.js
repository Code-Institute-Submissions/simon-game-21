var order = [];
var playerOrder = [];
var flash;
var turn;
var good;
var compTurn;
var intervalId;
var mode = false;
var noise = true;
var power = false;
var win;

const display = document.querySelector("#display");
const redPad = document.querySelector("#red-pad");
const yellowPad = document.querySelector("#yellow-pad");
const greenPad = document.querySelector("#green-pad");
const bluePad = document.querySelector("#blue-pad");
const modeButton = document.querySelector("#mode");
const powerButton = document.querySelector("#power");
const startButton = document.querySelector("#start");

modeButton.addEventListener('click', (event) => {
  if (modeButton.checked === true) {
    mode = true;
  } else {
    mode = false;
  }
});

powerButton.addEventListener('click', (event) => {
  if (powerButton.checked === true) {
    power = true;
    display.innerHTML = "-";
  } else {
    power = false;
    display.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener('click', (event) => {
  if (power || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  display.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  power = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    power = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    var audio = document.getElementById("sound1");
    audio.play();
  }
  noise = true;
  redPad.style.backgroundColor = "red";
}

function two() {
  if (noise) {
    var audio = document.getElementById("sound2");
    audio.play();
  }
  noise = true;
  yellowPad.style.backgroundColor = "yellow";
}

function three() {
  if (noise) {
    var audio = document.getElementById("sound3");
    audio.play();
  }
  noise = true;
  greenPad.style.backgroundColor = "#00e600";
}

function four() {
  if (noise) {
    var audio = document.getElementById("sound4");
    audio.play();
  }
  noise = true;
  bluePad.style.backgroundColor = "lightSkyBlue";
}

function clearColor() {
  redPad.style.backgroundColor = "#7b0000";
  yellowPad.style.backgroundColor = "#c5c503";
  greenPad.style.backgroundColor = "#005600";
  bluePad.style.backgroundColor = "#00006b";
}

function flashColor() {
  redPad.style.backgroundColor = "red";
  yellowPad.style.backgroundColor = "yellow";
  greenPad.style.backgroundColor = "#00e600";
  bluePad.style.backgroundColor = "lightSkyBlue";
}

redPad.addEventListener('click', (event) => {
  if (power) {
    playerOrder.push(1);
    check();
    one();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

yellowPad.addEventListener('click', (event) => {
  if (power) {
    playerOrder.push(2);
    check();
    two();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

greenPad.addEventListener('click', (event) => {
  if (power) {
    playerOrder.push(3);
    check();
    three();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

bluePad.addEventListener('click', (event) => {
  if (power) {
    playerOrder.push(4);
    check();
    four();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 20 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    display.innerHTML = "Lost";
    setTimeout(() => {
      display.innerHTML = turn;
      clearColor();

      if (mode) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    display.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  display.innerHTML = "WIN!";
  power = false;
  win = true;
}