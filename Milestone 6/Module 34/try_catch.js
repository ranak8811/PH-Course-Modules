function checkAge() {
  //   console.log("button clicked");

  const ageText = document.getElementById("age").value;
  const errorTag = document.getElementById("error");
  //   console.log(ageText);

  try {
    // console.log(bBaria);
    const age = parseInt(ageText);
    if (isNaN(age)) {
      //   console.log("age not found", age, ageText);
      throw "Please enter a valid age number";
    }

    if (age < 18) {
      throw "babies not allowed";
    } else if (age > 30) {
      throw "old people are not allowed";
    }

    errorTag.innerHTML = "";
  } catch (err) {
    console.log("Error: ", err);
    errorTag.innerHTML = "Error: " + err;
  } finally {
    console.log("All done inside try catch"); // ai line always execute hobei hobe
  }
  console.log(1111);
}
