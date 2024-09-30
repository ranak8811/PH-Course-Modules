const insertButton = document.getElementById("expense-insert-btn");
const expenseField = document.getElementById("expense-field");
const amountField = document.getElementById("amount-field");

const rowContainer = document.getElementById("row-container");

const expenseSpan = document.getElementById("expense-amount");

insertButton.addEventListener("click", function () {
  const expense = expenseField.value;
  const amount = Number(amountField.value);

  //   first way to add element
  //   const row = `
  //    <div class="flex justify-between" data-amount=${amount}>
  //     <p>${expense}</p>
  //     <p>${amount}</p>
  // </div>
  //   `;

  //   second way to add element (using javascript function)
  const rowUsingJs = document.createElement("div");
  const expenseP = document.createElement("p");
  const amountP = document.createElement("p");

  expenseP.append(expense);
  amountP.append(amount);

  rowUsingJs.classList.add("flex", "justify-between");
  rowUsingJs.setAttribute("data-amount", amount);

  //   console.log(rowUsingJs);
  rowUsingJs.append(expenseP);
  rowUsingJs.append(amountP);

  rowContainer.appendChild(rowUsingJs);

  let expenseAmount = Number(expenseSpan.innerText);
  expenseAmount += amount;
  console.log(expenseAmount);
  expenseSpan.innerText = expenseAmount; // i missed this line

  // using js function ends here

  //   let expenseAmount = Number(expenseSpan.innerText);
  //   expenseAmount += amount;
  //   console.log(expenseAmount);
  //   expenseSpan.innerText = expenseAmount; // i missed this line

  //   rowContainer.innerHTML += row;

  //   console.log(expense, amount);
});
