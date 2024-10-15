// const setAge = () => {
//   localStorage.setItem("age", 21);
// };

const saveToLocal = () => {
  const name = document.getElementById("product-name").value;
  const quantity = document.getElementById("product-quantity").value;

  console.log(name + ": " + quantity);
  saveProductToLocalStorage(name, quantity);
};

const getStoredShopping = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};

  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShopping();
  cart[product] = quantity;
  //   console.log(cart);
  const cartStr = JSON.stringify(cart);
  //   console.log(cartStr);

  localStorage.setItem("cart", cartStr);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShopping();
  //   console.log(savedCart);

  for (let product in savedCart) {
    console.log(product);
  }
};
displayProductFromLocalStorage();
