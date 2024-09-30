// the way i did is below

document.getElementById("submit-btn").addEventListener("click", function (e) {
  const text = document.getElementById("text-area");
  //   console.log(text.value);
  const amount = Number(text.value);
  //   console.log(amount);

  const review = document.getElementById("review");

  const row = `<p class="font-bold">${amount}</p>`;

  review.innerHTML += row;
  text.value = "";
});

//keyboard events
document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    // console.log(event);

    if (event.key === "Enter") {
      const inputValue = document.getElementById("text-area").value;
      const p = document.createElement("p");
      p.innerText = inputValue;
      const container = document.getElementById("review");
      container.appendChild(p);
      document.getElementById("text-area").value = "";
    }
  });
