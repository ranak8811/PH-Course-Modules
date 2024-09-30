const user = {
  id: 45,
  name: "John",
  address: {
    city: "London",
    country: "United States",
  },
};

// optional chain method using '?' means that if not found, then go to next state
console.log(user.address.street?.second);
