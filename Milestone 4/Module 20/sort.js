const nums = [4, 7, 12, 8, 43, 6, 1];
// console.log(nums);

// const rev_nums = nums.sort();
// console.log(rev_nums);

// avabe 3 dot dile main array ta change hoy na
const nums_asc = [...nums].sort(function (a, b) {
  return a - b;
});
const nums_dsc = [...nums].sort(function (a, b) {
  return b - a;
});

console.log(nums_asc);
console.log(nums_dsc);
