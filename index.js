// Створіть таймер, який має можливість налаштування часу (години, хвилини, секунди) з використанням елементів керування на сторінці (наприклад, input або select). Після досягнення встановленого часу виведіть повідомлення "Таймер завершено!".
const DateInput = document.getElementById("Input");
const Button = document.querySelector("#Button");
const Stop = document.querySelector("#Stop");
const Reset = document.querySelector("#Reset");

let Timer;
let seconds;
let StartB;
let qwe;

Stop.addEventListener("click", StopI);
Reset.addEventListener("click", ResetI);
function StopI(e) {
  qwe = seconds;
  clearInterval(Timer);

  StartB = 1;
}
function ResetI(e) {
  const DD = Number(DateInput.value);
  seconds = DD;
  Timer = setInterval(() => {
    seconds -= 1;
    console.log(seconds);

    if (seconds === 0) {
      alert("Таймер завершено!");
      clearInterval(Timer);
    }
  }, 1000);
}

Button.addEventListener("click", OnClick);
function OnClick(e) {
  const DD = Number(DateInput.value);
  if (DD === null || DD === 0) {
    return;
  }

  if (StartB === 1) {
    seconds = qwe;
    StartB = 0;
  } else {
    seconds = DD;
  }

  Timer = setInterval(() => {
    seconds -= 1;
    console.log(seconds);

    if (seconds === 0) {
      alert("Таймер завершено!");
      clearInterval(Timer);
    }
  }, 1000);
}
