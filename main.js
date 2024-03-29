const increaseBtn = document.getElementById("increment-el");
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const entriesEl = document.getElementById("entries-el");
let count = 0;

function increase() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  entriesEl.textContent += count + " - ";
  countEl.textContent = 0;
  count = 0;
}

increaseBtn.addEventListener("click", increase);
saveEl.addEventListener("click", save);
