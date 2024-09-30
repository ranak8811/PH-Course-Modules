const apex = { a: 1, b: 2, c: 3, d: 4 };

//const { a, b, c: x, d } = apex; //to destruct object we have to use same variables name as the real object
// console.log(b);
// console.log(x);
// console.log(a);

const bata = [2, 3, 4];
const [m, n] = bata;
// console.log(m);
// console.log(n);

// const k = Object.keys(apex);
// console.log(k);

// const v = Object.values(apex);
// console.log(v);

// delete apex.c;

// const p = Object.entries(apex); // array of arrays of objects or two dimensional arrays
// console.log(p);

const { b, ...others } = apex;
// console.log(others);

// Object.freeze(apex);
// apex.a = 99; //value didn't change
// console.log(apex);

Object.seal(apex); //add or remove not allowed but value change is allowed
apex.a = 99; //value did change
console.log(apex);
