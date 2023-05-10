let key = document.getElementById("key");
let keyCode = document.getElementById("keyCode");
let code = document.getElementById("code");

window.addEventListener("keydown", (event) => {
  //console.log(event);
  document.querySelector(".keyPress").style.display = "none";
  document.getElementById("parentContainer").style.display = "flex";
  document.getElementById("btn").style.display = "block";
  key.innerText = event.key;
  keyCode.innerText = event.keyCode;
  code.innerText = event.code;
});

document.getElementById("btn").addEventListener("click", () => {
  location.reload();
});
