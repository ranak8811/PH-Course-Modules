const nums = [3, 55, 2, 41, 66, 22];
// console.log(nums);
// console.log(...nums);

// console.log(Math.max(nums));
// console.log(Math.max(...nums));

const nums2 = nums;
const nums3 = [nums];
const nums4 = [...nums]; // copy using spread operator

nums2.push(1);
// console.log(nums);
// console.log(nums2);
// console.log(nums3);
// console.log(nums4);

const nums5 = [...nums, 999];
console.log(nums5);
