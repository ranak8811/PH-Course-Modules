// const add = (obj) => {
//   return obj.a + obj.b;
// };

// const obj = { a: 2, b: 3 };

// console.log(add(obj));

const add = ({ a, b }) => {
  return a + b;
};

const obj = { a: 5, b: 3 };

console.log(add(obj));
