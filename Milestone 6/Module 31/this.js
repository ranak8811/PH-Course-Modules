class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`ghumasse ${this.name}`);
  }

  snoring() {
    this.sleep();
  }
}

const h = new Person("kodom ali", 12);
// console.log(h);
h.sleep();
h.snoring();
const n = h.sleep(); // this gives undefined
console.log(n);
