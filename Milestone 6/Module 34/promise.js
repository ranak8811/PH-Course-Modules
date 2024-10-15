const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();

    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

myLoader()
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => {
    console.log("error with resolved data", err);
  });

async function loadData() {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}

const taskLoder = async () => {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
};

loadData();
taskLoder();
