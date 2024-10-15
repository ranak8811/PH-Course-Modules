const loadAllFoods = async (id) => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();

  if (id) {
    const details = data.categories[parseInt(id) - 1];
    return details;
  } else {
    displayAllFoods(data.categories);
  }
};

const displayAllFoods = async (foods) => {
  //   console.log(foods);

  const foodContainer = document.getElementById("foodContainer");
  //   console.log(foodContainer);

  foodContainer.innerHTML = "";
  foods.forEach((food) => {
    // console.log(food);

    const {
      idCategory,
      strCategory,
      strCategoryDescription,
      strCategoryThumb,
    } = food;

    const div = document.createElement("div");
    div.classList.add("md:flex", "gap-6", "border", "rounded-lg");
    div.innerHTML = `
    <div class="md:flex gap-6 border rounded-lg p-3">
      <div class='w-full max-w-[230px] max-h-[300px] mx-auto md:mx-0'>
        <img class='w-full h-full object-cover rounded-lg' src="${strCategoryThumb}" />
      </div>

      <div class="space-y-2 flex-1 py-2">
        <h4 class="text-xl font-bold">${strCategory}</h4>
        <p class="text-[#706F6F]">
          ${strCategoryDescription.substring(0, 150)}...
        </p>

        <p onclick="showDetails('${idCategory}')" class="text-[#FFC107] cursor-pointer">View Details</p>
      </div>
    </div>
`;

    foodContainer.appendChild(div);
  });
};

const showDetails = async (id) => {
  // console.log(id);

  const details = await loadAllFoods(id);
  // console.log(details);
};

loadAllFoods();
