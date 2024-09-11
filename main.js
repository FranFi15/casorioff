const scriptURL =
  "https://script.google.com/macros/s/AKfycbzR54RrwIHwB2ozBpVjsxVgdlpB-1bkkve9sMW_KJYy0GPxY210lI2af1Th9-YQ493M/exec";
const form = document.forms["formCasorio"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
