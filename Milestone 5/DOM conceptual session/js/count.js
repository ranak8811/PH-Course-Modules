const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");

let count = document.querySelector("#count");
// console.log(Number(count.textContent));

// minusBtn.addEventListener("click", function (e) {
//   count = Number(count.textContent) + 1;
//   count.innerText = count;
//   console.log(count.innerText);
// });

minusBtn.addEventListener("click", function (e) {
  let currentValue = Number(count.textContent);
  count.innerText = currentValue - 1;
});

let sum = 0;
function clickMe() {
  sum += 1;
  count.innerText = sum;
}
