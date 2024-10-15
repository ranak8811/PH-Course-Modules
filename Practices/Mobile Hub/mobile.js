const loadAllPhones = async (status, brand) => {
  // console.log(brand);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${
      brand ? brand : "iphone"
    }`
  );

  const data = await res.json();

  // waitABit();
  if (status) {
    displayAllPhones(data.data);
  } else {
    displayAllPhones(data.data.slice(0, 6));
  }
};

const waitABit = () => {
  const phoneLoader = document.getElementById("phoneLoader");
  phoneLoader.classList.remove("hidden");
  document.getElementById("mobile-cards").classList.add("hidden");
  setTimeout(() => {
    document.getElementById("mobile-cards").classList.remove("hidden");
    phoneLoader.classList.add("hidden");
  }, 3000);
};

const searchMobiles = () => {
  const searchText = document.getElementById("search-input").value;
  console.log(searchText);
  loadAllPhones(false, searchText);
};

const displayAllPhones = (phones) => {
  //   console.log(phones);

  const mobileContainer = document.getElementById("mobile-cards");
  mobileContainer.innerHTML = "";
  phones.forEach((phone) => {
    // console.log(phone);

    const { brand, phone_name, slug, image } = phone;
    // console.log(phone_name);

    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
        <figure><img src="${image}" alt="${phone_name}" class="w-full p-10 object-cover" /></figure>
        <div class="card-body">
            <h2 class="text-2xl font-bold card-title">${brand}</h2>
            <h2 class="card-title">${phone_name}</h2>
            <button class="btn btn-primary" onclick="showDetails('${slug}')">Show Details</button>
        </div>
    </div>
    `;

    mobileContainer.appendChild(div);
  });
};

const showAllPhones = () => {
  const searchText = document.getElementById("search-input").value;
  loadAllPhones(true, searchText);
};

loadAllPhones(false, "");
