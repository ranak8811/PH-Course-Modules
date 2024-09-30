// document
//   .getElementById("add-money-btn")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     // console.log("checking");

//     const addMoney = document.getElementById("input-add-money").value;
//     const addMoneyNumber = parseFloat(addMoney);
//     // console.log(addMoney);
//     const pinNumber = document.getElementById("input-pin-number").value;
//     // console.log(pinNumber);

//     if (pinNumber === "1234") {
//       //   console.log("add-money");
//       const balance = document.getElementById("account-balance").innerText;
//       //   console.log(balance);
//       const balanceNumber = parseFloat(balance);
//       const newBalance = balanceNumber + addMoneyNumber;
//       document.getElementById("account-balance").innerText = newBalance;
//     } else {
//       alert("Failed to add money, please try again!!!");
//     }
//   });

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("hudai");
    // const addMoney = getInputFieldValueById();
    // console.log("add-money", addMoney);

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");

    // console.log("with parameter", addMoney);
    // console.log("pin using parameter", pinNumber);

    if (isNaN(addMoney)) {
      alert("Failed to add money, enter number");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      // console.log(balance, addMoney);
      const newBalance = balance + addMoney;

      document.getElementById("account-balance").innerText = newBalance;

      const p = document.createElement("p");
      p.style.backgroundColor = "#abcdef";
      p.style.padding = "10px";
      p.innerText = `Added ${addMoney} Tk. New Balance: ${newBalance}`;
      // console.log(p);
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add money, please try again!!!");
    }
  });
