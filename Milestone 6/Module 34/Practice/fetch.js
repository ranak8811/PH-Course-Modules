const jokeContainer = document.getElementById("jokeContainer");
const bgChangeBtn = document.getElementById("bg-change-btn");
const backgroundColor = document.querySelector(".backgroundColor");

function generateLightColor() {
  // Generate random values for R, G, and B in a light range (between 150 and 255)
  const r = Math.floor(Math.random() * 106) + 190; // 150-255
  const g = Math.floor(Math.random() * 106) + 190; // 150-255
  const b = Math.floor(Math.random() * 106) + 190; // 150-255

  // Return the color in RGB format
  return `rgb(${r}, ${g}, ${b})`;
}

async function bringData() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single"
  );
  const data = await res.json();
  //   console.log(data.joke);

  const jokeDiv = document.createElement("div");
  jokeDiv.classList.add("space", "fontSize");
  jokeDiv.style.backgroundColor = generateLightColor();
  jokeDiv.innerText = data.joke;
  jokeContainer.appendChild(jokeDiv);
}

bgChangeBtn.addEventListener("click", function (e) {
  console.log(backgroundColor.classList[0]);
});
