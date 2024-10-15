console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let num = 0;

const clockId = setInterval(() => {
  num++;
  //   console.log("i m u");

  if (num > 6) {
    clearInterval(clockId);
  }
  console.log(clockId, num);
}, 2000);

// for setTimeout we have to use clearTimeout function
