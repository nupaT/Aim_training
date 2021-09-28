const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-List");
let time = 0;
const timeEnd = document.querySelector("#time");
const board = document.querySelector("#board");
let score = 0;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = +event.target.getAttribute("data-time");
    screens[1].classList.add("up");
    startGame();
  }
});

function startGame() {
  setInterval(changeTime, 1000);
  setTimeout(time);
  createRandomCircle();
}

function changeTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTimeout(current);
  }
}

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    console.log(score);
    event.target.remove();
    createRandomCircle();
  }
});

function setTimeout(value) {
  timeEnd.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEnd.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span> </h1>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = randomCircleSize(10, 60);
  // деструктуризация
  const { width, height } = board.getBoundingClientRect();
  const x = randomCircleSize(0, width - size);
  const y = randomCircleSize(0, height - size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `radial-gradient(${randomCircleColor()}, ${randomCircleColor()})`;
  board.append(circle);
}

function randomCircleSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomCircleColor() {
  let r = Math.floor(Math.random() * (255 - 50) + 50);
  let g = Math.floor(Math.random() * (255 - 50) + 50);
  let b = Math.floor(Math.random() * (255 - 50) + 50);
  const color = `#` + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
