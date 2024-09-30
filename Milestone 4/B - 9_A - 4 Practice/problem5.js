/*function signature/sample */
function monthlySavings(arr, livingCost) {
  // You have to write your code here
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalIncome = 0;
  for (let payment of arr) {
    let tax = 0;
    if (payment >= 3000) {
      tax = payment * 0.2;
    }

    totalIncome += payment - tax;
  }

  let savings = totalIncome - livingCost;
  //   if (savings >= 0) {
  //     return savings;
  //   } else {
  //     return "earn more";
  //   }

  return savings >= 0 ? savings : "earn more";
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
