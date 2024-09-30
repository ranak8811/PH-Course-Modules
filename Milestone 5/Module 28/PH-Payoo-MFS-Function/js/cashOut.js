document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("cash");
  const cashOut = getInputFieldValueById("cash-out-input");
  //   console.log(cashOut);
  const pinNumber = getInputFieldValueById("cash-out-pin-number-input");
  //   console.log(pinNumber);

  if (isNaN(cashOut)) {
    alert("Failed to cash out, enter number");
    return;
  }

  if (pinNumber === 1234) {
    const balance = getTextFieldValueById("account-balance");

    if (cashOut > balance) {
      alert("You do not have enough money to cash out");
      return;
    }

    // console.log(balance);
    const newBalance = balance - cashOut;

    document.getElementById("account-balance").innerText = newBalance;

    const div = document.createElement("div");
    div.classList.add("bg-yellow-300");
    div.innerHTML = `
    <h4 class="text-2xl font-bold">Cash Out</h4>
    <p>${cashOut} withdraw. New balance ${newBalance}</p>
    `;

    document.getElementById("transaction-container").appendChild(div);
  } else {
    alert("Failed to add money, please try again!!!");
  }
});
