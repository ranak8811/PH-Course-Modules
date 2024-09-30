document
  .getElementById("show-add-money-form")
  .addEventListener("click", function (e) {
    // console.log("show-add-money-form");
    showSectionById("add-money-form");
  });

document
  .getElementById("show-cash-out-form")
  .addEventListener("click", function (e) {
    showSectionById("cash-out-form");
  });
document
  .getElementById("show-transaction-history")
  .addEventListener("click", function (e) {
    showSectionById("transaction-section");
  });
