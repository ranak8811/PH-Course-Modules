// console.log("view");

function getTimeString(time) {
  const hour = parseInt(time / 3600);
  let remainingSeconds = time % 3600;
  const minute = parseInt(remainingSeconds / 60);
  remainingSeconds = remainingSeconds % 60;

  return `${hour} hour ${minute} minutes ${remainingSeconds} seconds ago`;
}

const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("category-btn");
  //   console.log(buttons);

  for (let btn of buttons) {
    btn.classList.remove("active");
  }
};

const loadCategories = () => {
  //   console.log("catagories");
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err));
};
const loadVideos = (searchText = "") => {
  //   console.log("catagories");
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
  )
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};

const loadCategoryVideos = (id) => {
  //   alert(id);

  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // first remove active class from all the categories buttons
      removeActiveClass();

      const activeBtn = document.getElementById(`btn-${id}`);
      //   console.log(activeBtn);
      activeBtn.classList.add("active");
      displayVideos(data.category);
    })
    .catch((err) => console.log(err));
};

const loadDetails = async (videoId) => {
  //   console.log(videoId);

  const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;

  const res = await fetch(uri);
  const data = await res.json();
  //   console.log(data);
  displayDetails(data.video);
};

const displayDetails = (video) => {
  //   console.log(video);
  const detailsContainer = document.getElementById("modal-content");

  detailsContainer.innerHTML = `
    <img src="${video.thumbnail}"/>
    <p>${video.description}</p>
  `;

  // way 1
  //   document.getElementById("showModalData").click();

  // way 2
  document.getElementById("customModal").showModal();
};

const displayVideos = (videos) => {
  //   console.log(videos);
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";

  if (videos.length == 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
        <div class="min-h-[500px] flex flex-col gap-5 justify-center items-center">
            <img src="assets/Icon.png" alt="" />
            <h2 class="text-center font-bold text-xl">No content here is this category</h2>

        </div>
    `;
    return;
  } else {
    videoContainer.classList.add("grid");
  }

  videos.forEach((video) => {
    // console.log(video);

    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
         <figure class="h-[200px] relative">
            <img
            src=${video.thumbnail}
            class="h-full w-full object-cover"
            alt="Shoes" />

            ${
              video.others.posted_date?.length == 0
                ? ""
                : `<span class="absolute text-xs bottom-2 right-2 bg-black rounded p-1 text-white">${getTimeString(
                    video.others.posted_date
                  )}</span>`
            }

            
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src="${
                  video.authors[0].profile_picture
                }" />
            </div>

            <div>
                <h2 class"font-bold">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-gray-400">${
                      video.authors[0].profile_name
                    }</p>
                    ${
                      video.authors[0].verified
                        ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>`
                        : ""
                    }
                
                </div>

                <p>
                    <button onclick="loadDetails('${
                      video.video_id
                    }')" class="btn btn-sm btn-error">Details</button>
                    
                </p>
            </div>
        </div>
    `;

    videoContainer.append(card);
  });
};

const displayCatagories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    // console.log(item);

    const buttonContainer = document.createElement("div");

    buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
            ${item.category}
        </button>

    `;

    // button.classList = "btn";
    // button.innerText = item.category;
    // button.onclick = alert("hei");
    categoryContainer.append(buttonContainer);
    // categoryContainer.append(button);
  });
};

document.getElementById("search-input").addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  loadVideos(e.target.value);
});

loadCategories();
loadVideos();