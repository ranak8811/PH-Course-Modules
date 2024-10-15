function delayGreeting(name, time) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
  }, time);
}

delayGreeting("Alice", 3000);
