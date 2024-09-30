function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function showError(id) {
  return document.getElementById(id).classList.remove("hidden");
}

function addToHistory(income, totalExpenses, balance) {
  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-l-2 border-indigo-500";

  historyItem.innerHTML = `
  <p class="text-xs text-gray-500">Serial: ${count}</p>
  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  <p class="text-xs text-gray-500">Income: ${income.toFixed(2)}</p>
  <p class="text-xs text-gray-500">Expenses: ${totalExpenses.toFixed(2)}</p>
  <p class="text-xs text-gray-500">Balance: ${balance.toFixed(2)}</p>
  `;

  const historyContainer = document.getElementById("history-list");

  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

let count = 0;
const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function (e) {
  count++;

  const income = getInputValueById("income");
  const software = getInputValueById("software");
  const courses = getInputValueById("courses");
  const internet = getInputValueById("internet");

  if (income <= 0 || isNaN(income)) {
    showError("income-error");
    return;
  }
  if (software <= 0 || isNaN(software)) {
    showError("software-error");
    return;
  }
  if (courses <= 0 || isNaN(courses)) {
    showError("courses-error");
    return;
  }
  if (internet <= 0 || isNaN(internet)) {
    showError("internet-error");
    return;
  }

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  if (totalExpenses > income) {
    showError("logic-error");
    return;
  }

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById("results");
  result.classList.remove("hidden");

  addToHistory(income, totalExpenses, balance);
});

const calculateSavingsBtn = document.getElementById("calculate-savings");
calculateSavingsBtn.addEventListener("click", function (e) {
  //   console.log("teh");
  const savingPercentage = parseFloat(document.getElementById("savings").value);
  //   console.log(savingPercentage);

  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);
  //   console.table({ income, software, courses, internet });

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;
  //   console.table({ totalExpenses, balance });

  const savingAmount = (savingPercentage * balance) / 100;
  //   console.log(savingAmount);

  const savingsElement = document.getElementById("savings-amount");
  savingsElement.innerText = savingAmount.toFixed(2);

  const remainingBalance = balance - savingAmount;
  const remainingElement = document.getElementById("remaining-balance");
  remainingElement.innerText = remainingBalance.toFixed(2);
});

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function (e) {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove("text-gray-600");
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.add("text-gray-600");

  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

assistantTab.addEventListener("click", function (e) {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

//live validation checking
document.getElementById("income").addEventListener("input", function (e) {
  const inputValue = document.getElementById("income").value;
  if (inputValue <= 0 || isNaN(inputValue)) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
});