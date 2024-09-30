document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const addMoneyInput = document.getElementById("add-money-input").value;
    // console.log(addMoneyInput);

    const pinNumberInput = document.getElementById("pin-number-input").value;
    // console.log(pinNumberInput);

    if (pinNumberInput === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      //   console.log(balance);
      const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
      //   console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money, please try again!!!");
    }
  });
