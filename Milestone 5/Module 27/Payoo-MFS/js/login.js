// search: form submit reloading the page

// step 1: set the event handlers
document.getElementById("button-login").addEventListener("click", function (e) {
  //   console.log("login clicked");

  // step 2: prevent default behavior (prevent reloading browser)
  e.preventDefault(); // vejal for beginners

  // step 3: get the phone number
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  //   console.log(phoneNumber, pinNumber);

  if (phoneNumber === "5" && pinNumber === "1234") {
    console.log("you are logged in");
    window.location.href = "./home.html";
  } else {
    alert("You are not logged in");
  }
});
