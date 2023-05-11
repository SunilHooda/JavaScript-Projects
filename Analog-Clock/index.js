let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minute");
let secondHand = document.getElementById("second");
let time = document.getElementById("time");
let date = document.getElementById("date");
let toggle = document.getElementById("toggle");

//Changing theme
toggle.addEventListener("click", () => {
  let html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggle.innerText = "Dark Mode";
  } else {
    html.classList.add("dark");
    toggle.innerText = "Light Mode";
  }
});

setInterval(() => {
  const newDate = new Date();

  const currentDay = newDate.getDay();
  const currentDate = newDate.getDate();
  const currentMonth = newDate.getMonth();

  const hour = newDate.getHours();
  const hourin12Format = hour % 12;
  console.log(hour);

  const minute = newDate.getMinutes();
  const second = newDate.getSeconds();

  const amPM = hour < 12 ? "AM" : "PM";

  //console.log(currentDate, currentDay, currentMonth);
  /* Above methods will give result in Index-Based-Numbers so we need an days array and month array to iterate over according the result */

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  time.innerText = `${hour}:${minute < 10 ? `0${minute}` : minute} ${amPM} `;

  date.innerText = `${days[currentDay]}, ${currentDate} ${months[currentMonth]}`;

  hourHand.style.transform = `translate(-50%, -100%) rotate(${
    hour * 30 + minute / 2
  }deg)`;

  minuteHand.style.transform = `translate(-50%, -100%) rotate(${
    minute * 6
  }deg)`;

  secondHand.style.transform = `translate(-50%, -100%) rotate(${
    second * 6
  }deg)`;
}, 1000);
