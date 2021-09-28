const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-List");
let time = 0;
const timeEnd = document.querySelector("#time");

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
}

function changeTime() {
  let current = --time;
  if (current < 10) {
    current = `0${current}`;
  }
  setTimeout(current);
}

function setTimeout(value) {
  timeEnd.innerHTML = `00:${value}`;
}
