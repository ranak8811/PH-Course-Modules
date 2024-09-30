document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("click");

  const cashOut = document.getElementById("cash-out-input").value;
  //   console.log(cashOut);
  const pinNumber = document.getElementById("cash-out-pin-number-input").value;
  //   console.log(pinNumber);

  if (pinNumber === "1234") {
    // console.log("hei");
    const balance = document.getElementById("account-balance").innerText;
    // console.log(balance);

    const newBalance = parseFloat(balance) - parseFloat(cashOut);
    // console.log(newBalance);

    document.getElementById("account-balance").innerText = newBalance;
  } else {
    alert("Failed to cash out, please try again!!!");
  }
});
