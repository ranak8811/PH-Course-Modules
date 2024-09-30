const selectedSeatEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");
const availableSeatEl = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponInputEl = document.getElementById("coupon-field");
const couponBtnEl = document.getElementById("coupon-btn");
const defaultTextEl = document.getElementById("default-text");
const grandTotalEl = document.getElementById("grand-total");
const phoneNumberEl = document.getElementById("phone-number");
const nextButtonEl = document.getElementById("next-btn");

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
  //   console.log(event);

  const value = event.innerText;
  if (selectedSeat.includes(value)) {
    return alert("Seat already selected");
  } else if (selectedSeat.length < 4) {
    event.classList.add("bg-primary");
    event.classList.add("text-white");

    selectedSeat.push(event.innerText);
    //   console.log(selectedSeat);
    totalBookedEl.innerText = selectedSeat.length;

    //   console.log(availableSeatEl);

    const availableSeatValue = parseInt(availableSeatEl.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;

    // remove default text
    defaultTextEl.classList.add("hidden");

    selectedSeatEl.innerHTML += `<li class="flex justify-between text-base font-normal">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
  </li>
  `;

    //   update total price
    totalPrice += 500;

    totalPriceEl.innerText = totalPrice.toFixed(2);

    //   active coupon button
    if (selectedSeat.length > 3) {
      couponInputEl.removeAttribute("disabled");
      couponBtnEl.removeAttribute("disabled");
    }
  } else {
    return alert("Maximum number of seats (4) booked");
  }
}

document.getElementById("coupon-btn").addEventListener("click", function (e) {
  let couponSave = 0;
  //   console.log("hello");
  const couponInputValue = couponInputEl.value;
  //   console.log(couponInputValue);
  if (couponInputValue !== "NEW50" && couponInputValue !== "Couple 20") {
    return alert("Your provided coupon is not valid");
  }
  if (couponInputValue === "NEW50") {
    couponSave = totalPrice * 0.15;
  } else {
    couponSave = totalPrice * 0.15;
  }

  const showCouponPriceEl = document.getElementById("show-coupon-price");
  showCouponPriceEl.innerHTML = `<p>Discount</p>
<p><span>-Bdt: </span> <span>${couponSave.toFixed(2)}</span></p>`;

  const grandTotalValue = totalPrice - couponSave;
  grandTotalEl.innerText = grandTotalValue.toFixed(2);
});

phoneNumberEl.addEventListener("input", function (e) {
  const inputValue = e.target.value;
  //   console.log(inputValue);
  if (inputValue.length >= 11) {
    nextButtonEl.removeAttribute("disabled");
  }
});

document.getElementById("btn-continue").addEventListener("click", function (e) {
  window.location.reload();
});
