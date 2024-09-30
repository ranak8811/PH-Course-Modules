const ulTag = document.getElementById("nav-container");
// console.log(ulTag);
const listItems = ulTag.getElementsByTagName("li");

let lastClicked = null;

console.log(listItems);
for (let listItem of listItems) {
  listItem.addEventListener("click", function (e) {
    // console.log(listItem.innerText);

    // console.log(lastClicked);

    if (lastClicked == null) {
      listItem.style.backgroundColor = "red";
      listItem.style.color = "white";
      lastClicked = listItem;
    } else {
      lastClicked.style.backgroundColor = "transparent";
      lastClicked.style.color = "#eee";

      listItem.style.backgroundColor = "red";
      listItem.style.color = "white";
      lastClicked = listItem;
    }
  });
}

// https://screeching-plough-4fd.notion.site/Milestone-5-Part-1-DOM-Tour-Event-Handling-3b4bcecedf504d5b87f88fda580965e3#1000adbafc6c8063be3bddcd31792ee2

// child node diye access kora better choice na
