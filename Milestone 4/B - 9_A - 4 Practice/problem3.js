/*function signature/sample */
function deleteInvalids(array) {
  // You have to write your code here

  if (!Array.isArray(array)) {
    return "Invalid Array";
  }

  let numberArray = [];

  for (let element of array) {
    if (typeof element === "number" && isNaN(element) === false) {
      numberArray.push(element);
    }
  }

  return numberArray;
}

console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));
