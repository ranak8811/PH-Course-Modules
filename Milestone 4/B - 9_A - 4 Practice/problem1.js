/*function signature/sample */
function calculateMoney(ticketSale) {
  // You have to write your code here

  if (ticketSale < 0 || typeof ticketSale !== "number") {
    return "Invalid Number";
  }

  return ticketSale * 120 - (500 + 8 * 50);
}

console.log(calculateMoney(93));
console.log(calculateMoney(-2));
