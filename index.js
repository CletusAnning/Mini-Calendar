const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const numberEl = document.getElementById("number");
const yearEl = document.getElementById("year");

const date = new Date();
console.log(date);
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("eng", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("eng", {
  weekday: "long",
});

numberEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
