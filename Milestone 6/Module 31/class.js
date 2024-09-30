class Product {
  country = "Bangladesh";

  constructor(name) {
    this.name = name;
  }

  speak(talk) {
    console.log(`taling about: ${talk}`);
  }
}

// const bd = new Product();
const bd = new Product("aito hoise aibar");

console.log(bd);
bd.speak("kire vai koi tui");
