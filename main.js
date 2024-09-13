const scriptURL =
  "https://script.google.com/macros/s/AKfycbzR54RrwIHwB2ozBpVjsxVgdlpB-1bkkve9sMW_KJYy0GPxY210lI2af1Th9-YQ493M/exec";
const form = document.forms["formCasorio"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

const btnE = document.querySelector("button#enviar");

function Hide() {
  btnE.style.opacity = "0";
}

const dateTarget = new Date("12/28/2024 8:00 PM");

const days = document.querySelector("span#days");
const hours = document.querySelector("span#hours");
const minutes = document.querySelector("span#minutes");
const seconds = document.querySelector("span#seconds");

const milisecondsOfASecond = 1000;
const milisecondsOfAMinute = milisecondsOfASecond * 60;
const milisecondsOfAHour = milisecondsOfAMinute * 60;
const milisecondsOfADay = milisecondsOfAHour * 24;

function updateCountdown() {
  const now = new Date();
  const duration = dateTarget - now;
  const remainingDays = Math.floor(duration / milisecondsOfADay);
  const remainingHours = Math.floor(
    (duration % milisecondsOfADay) / milisecondsOfAHour
  );
  const remainingMinutes = Math.floor(
    (duration % milisecondsOfAHour) / milisecondsOfAMinute
  );
  const remainingSeconds = Math.floor(
    (duration % milisecondsOfAMinute) / milisecondsOfASecond
  );
  days.textContent = remainingDays;
  hours.textContent = remainingHours;
  minutes.textContent = remainingMinutes;
  seconds.textContent = remainingSeconds;
}
updateCountdown();

setInterval(updateCountdown, milisecondsOfASecond);

const CBU = document.querySelector("span#CBU");

function Click() {
  if (CBU.textContent === "CBU") {
    return (CBU.textContent =
      "Alias: casamientofloryfran  CBU:0000003100098307620205");
  } else if (
    CBU.textContent === "Alias: casamientofloryfran  CBU:0000003100098307620205"
  ) {
    return (CBU.textContent = "CBU");
  }
}

const audio = document.getElementById("audio");
const btn = document.getElementById("btn");
function Play() {
  if (audio.paused) {
    audio.play();
    btn.style.background = "url(img/pausa.png)";
  } else if (audio.play) {
    audio.pause();
    btn.style.background = "url(img/boton-de-play.png)";
  }
}
