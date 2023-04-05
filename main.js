// 랜덤번호를 지정해준다
// 유저가 번호를 입력할 수 있게한다.
// 유저가 입력한 번호를 가져올수있게한다
// 유저가 랜덤번호를 맞췄으면 맞췄습니다.
// 유저가 틀렸으면 틀렸습니다.
// 틀렸으면 남음기회를 알려준다.
// 맞췄으면 버튼을 비활성화 시켜주고 리셋한다.
// 유저가 1-100범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNumber = 0;
let playButton = document.getElementById("play-btn");
let inputNumber = document.getElementById("input-number");
let resultArea = document.getElementById("result-area");
let ResetButton = document.getElementById("Reset-btn");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];
playButton.addEventListener("click", play);
ResetButton.addEventListener("click", reset);
inputNumber.addEventListener("focus", function () {
  inputNumber.value = "";
});
function getRandomNum() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("correct", computerNumber);
}
getRandomNum();

function play() {
  let userValue = inputNumber.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "Enter a number between 1 & 100.";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "This number has already been.";
    return;
  }

  chances--;
  chanceArea.textContent = `Remaining chance : ${chances}`;

  if (userValue < computerNumber) {
    resultArea.textContent = "up";
  } else if (userValue > computerNumber) {
    resultArea.textContent = "down";
  } else {
    resultArea.textContent = " Good job !!!";
    gameOver = true;
  }
  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  //inputNumber 창이 깨끗하게 정리되야함
  inputNumber.value = "";
  // 새로운 랜덤번호가 생성되야함
  getRandomNum();
  //  새로운 지시어를 입력해 ui에서 보여져야함
  resultArea.textContent = "Re Start";
  if (chances < 5) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = false;
  }
}
