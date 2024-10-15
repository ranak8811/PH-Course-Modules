function tellJoke() {
  console.log("something funny🤣");
}

let c = 0;

const jokeInterval = setInterval(() => {
  tellJoke();

  c += 2;

  if (c >= 10) {
    clearInterval(jokeInterval);
  }
}, 2000);
