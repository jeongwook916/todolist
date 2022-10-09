const clock = document.querySelector("p#clock");
const date = document.querySelector("p#date");

function getClock() {
  const nowDate = new Date();
  const hours = nowDate.getHours();
  const minutes = String (nowDate.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

function getDate() {
  const nowDate = new Date();
  const week = new Array('일', '월', '화', '수', '목', '금', '토');
  const month = nowDate.getMonth() + 1;
  const day = nowDate.getDate();
  const dayName = week[nowDate.getDay()];
  date.innerText = `${month}월 ${day}일 ${dayName}요일`;
}

getClock();
getDate();
setInterval(getClock, getDate, 10);