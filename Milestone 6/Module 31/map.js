const nums = [2, 3, 4, 5];

function doubleIt(n) {
  return n * 2;
}

const double2 = (n) => n * 2;

const res = nums.map(doubleIt);
// console.log(res);

const output = nums.map(double2);
// console.log(output);

const finalOutput = nums.map((n) => n * 2);
// console.log(finalOutput);

const a = ["mango", "orange", "grape", "why", "it", "it again"];
const len = a.map((x) => x.length);
console.log(len);
