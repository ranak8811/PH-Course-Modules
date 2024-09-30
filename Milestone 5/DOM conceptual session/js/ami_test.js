// document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
// not working this don't know why

const container = document.getElementById("container");
const divs = container.getElementsByTagName("div");

// console.log(divs);
let c = 0;
for (let div of divs) {
  console.log(div.innerHTML);
  //   console.log(div.innerText);
  console.log(++c);
}
