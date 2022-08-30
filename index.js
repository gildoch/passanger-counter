let saveEl = document.getElementById("save-el");
let incrementBtn = document.getElementById("increment-btn");
let countEl = document.getElementById("count-el");
let para = document.createElement("p");

let count = 0;
function counter() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let saved = " " + count + " -";
  saveEl.innerText += saved;
  count = 0;
  countEl.innerText = 0;
}
