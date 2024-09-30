const a = [2, 4, 1, 7, 3, 5, 6];

const total = a.reduce((previous, current) => previous + current, 0);
// console.log(total);

const mul = a.reduce((p, c) => {
  console.log(p * c);
  console.log("testing " + c);
}, 1);
console.log(mul);
// const mul = a.reduce((p, c) => p * c, 1);
// console.log(mul);
