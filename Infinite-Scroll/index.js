let pageNumber = 1;
let actualData;

const showDataOnScroll = () => {
  setTimeout(() => {
    pageNumber++;
    getComments(pageNumber);
  }, 1000);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showDataOnScroll();
  }
});

window.addEventListener("reset", () => {
  pageNumber = 1;
});

const getComments = async (pageNumber) => {
  let data = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=10`
  );

  actualData = await data.json();
  //console.log(actualData);
  appendComments(actualData);
};

getComments(pageNumber);

const getRandomBg = () => {
  let colorValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];
  let newColor = "#";

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 14);
    let value = colorValues[index];
    newColor += value;
  }
  return newColor;
};

const appendComments = (actualData) => {
  let container = document.getElementById("commentContainer");
  actualData.forEach((elem) => {
    let box = document.createElement("div");
    box.className = "commentBox";
    box.style.backgroundColor = getRandomBg();

    box.addEventListener("click", () => {
      openModal(elem);
      document.body.classList.add("active-modal");
    });

    let id = document.createElement("h2");
    id.innerText = elem.id;

    let body = document.createElement("p");
    body.innerText = elem.body;

    box.append(id, body);
    container.append(box);
  });
};

const openModal = (elem) => {
  let modalContainer = document.getElementById("modalContainer");
  modalContainer.innerHTML = null;
  modalContainer.style.display = "block";

  let modalBox = document.createElement("div");
  modalBox.setAttribute("class", "modalBox");

  let headBox = document.createElement("div");

  let id = document.createElement("h2");
  id.innerText = elem.id;

  let closeBtn = document.createElement("h2");
  closeBtn.innerText = "X";

  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("active-modal");
    modalContainer.style.display = "none";
  });

  headBox.append(id, closeBtn);

  let username = document.createElement("h3");
  username.innerText = `Username: ${elem.name}`;

  let email = document.createElement("h4");
  email.innerText = `Email: ${elem.email}`;

  let body = document.createElement("p");
  body.innerText = elem.body;

  modalBox.append(headBox, username, email, body);
  modalContainer.append(modalBox);
};
