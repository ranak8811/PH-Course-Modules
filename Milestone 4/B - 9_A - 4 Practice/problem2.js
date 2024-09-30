/*function signature/sample */
function checkName(name) {
  //write your code here

  if (typeof name !== "string") {
    return "invalid";
  }

  name = name.toLowerCase();
  let lastLetter = name.slice(-1);

  if (
    lastLetter === "a" ||
    lastLetter === "e" ||
    lastLetter === "i" ||
    lastLetter === "o" ||
    lastLetter === "u" ||
    lastLetter === "y" ||
    lastLetter === "w"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

console.log(checkName("Ranr"));
console.log(checkName(5));
