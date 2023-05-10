// categorizing repeated syntax
let winnerAlert = document.querySelector("#winnerAlert");
let winnerBox = document.querySelector("#winnerBox");
let rollDice = document.querySelector("#roll");
let winEmoji = document.querySelectorAll(".winEmoji");

// members div
let member1 = document.querySelector("#member-1");
let member2 = document.querySelector("#member-2");
let member3 = document.querySelector("#member-3");

//Roll Event
rollDice.addEventListener("click", () => {
  rollDice.style.display = "none";
  document.querySelector("#clickHereGIF").style.display = "none";

  // dice random number of 3 members
  member1.innerText = Math.floor(Math.random() * 6) + 1;
  member2.innerText = Math.floor(Math.random() * 6) + 1;
  member3.innerText = Math.floor(Math.random() * 6) + 1;

  //Storing scores of members to compare
  let n1 = member1.innerText;
  let n2 = member2.innerText;
  let n3 = member3.innerText;

  //for maximun number
  if (n1 > n2 && n1 > n3) {
    winEmojiFunc(winEmoji);
    winnerAlert.textContent = "Member-1 is Winner";
    member1.style.backgroundColor = "green";
    winnerBox.style.backgroundColor = "teal";
    winnerAlert.style.color = "white";
  } else if (n2 > n1 && n2 > n3) {
    winEmojiFunc(winEmoji);
    winnerAlert.textContent = "Member-2 is Winner";
    member2.style.backgroundColor = "green";
    winnerBox.style.backgroundColor = "teal";
    winnerAlert.style.color = "white";
  } else if (n3 > n2 && n3 > n1) {
    winEmojiFunc(winEmoji);
    winnerAlert.textContent = "Member-3 is Winner";
    member3.style.backgroundColor = "green";
    winnerBox.style.backgroundColor = "teal";
    winnerAlert.style.color = "white";
  }

  // for second maximum
  if ((n1 > n2 && n1 < n3) || (n1 > n3 && n1 < n2)) {
    member1.style.backgroundColor = "yellow";
  } else if ((n2 > n1 && n2 < n3) || (n2 > n3 && n2 < n1)) {
    member2.style.backgroundColor = "yellow";
  } else if ((n3 > n1 && n3 < n2) || (n3 > n2 && n3 < n1)) {
    member3.style.backgroundColor = "yellow";
  }

  // for minimum number
  if (n1 < n2 && n1 < n3) {
    member1.style.backgroundColor = "red";
  } else if (n2 < n1 && n2 < n3) {
    member2.style.backgroundColor = "red";
  } else if (n3 < n2 && n3 < n1) {
    member3.style.backgroundColor = "red";
  }

  // for draw
  if (n1 === n2 && n2 === n3) {
    drawEmojiFunc(winEmoji);
    winnerAlert.textContent = "It's a Draw";
    member1.style.backgroundColor = "blue";
    member2.style.backgroundColor = "blue";
    member3.style.backgroundColor = "blue";
  } else if (n1 === n2 && n1 > n3) {
    drawEmojiFunc(winEmoji);
    winnerAlert.textContent = "It's a Draw";
    member1.style.backgroundColor = "blue";
    member2.style.backgroundColor = "blue";
  } else if (n1 === n3 && n1 > n2) {
    drawEmojiFunc(winEmoji);
    winnerAlert.textContent = "It's a Draw";
    member1.style.backgroundColor = "blue";
    member3.style.backgroundColor = "blue";
  } else if (n2 === n3 && n2 > n1) {
    drawEmojiFunc(winEmoji);
    winnerAlert.textContent = "It's a Draw";
    member2.style.backgroundColor = "blue";
    member3.style.backgroundColor = "blue";
  } else if (n1 === n2 && n1 < n3) {
    winEmojiFunc(winEmoji);
    winnerAlert.textContent = "Member-3 is Winner";
    member1.style.backgroundColor = "blue";
    member2.style.backgroundColor = "blue";
  } else if (n1 === n3 && n1 < n2) {
    winEmojiFunc(winEmoji);
    winnerAlert.textContent = "Member-2 is Winner";
    member1.style.backgroundColor = "blue";
    member3.style.backgroundColor = "blue";
  } else if (n2 === n3 && n2 < n1) {
    winEmojiFunc(winEmoji);
    winnerAlert.textContent = "Member-1 is Winner";
    member2.style.backgroundColor = "blue";
    member3.style.backgroundColor = "blue";
  }

  setTimeout(() => {
    location.reload(1);
  }, 3500);
});

let winEmojiFunc = (arr) => {
  arr.forEach((elem) => {
    elem.src = "./Images/winEmoji.png";
  });
};

let drawEmojiFunc = (arr) => {
  arr.forEach((elem) => {
    elem.src = "./Images/drawEmoji.png";
  });
};
