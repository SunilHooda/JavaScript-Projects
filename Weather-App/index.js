const dateTime = document.querySelector(".dateTime");
const map = document.querySelector(".map");
const liveLocation = document.getElementById("liveLocation");

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function setTimeAsPerZone(timeStamp, timezone) {
  const newDate = new Date((timeStamp + timezone) * 1000);

  let hours = newDate.getUTCHours();
  let minutes = newDate.getUTCMinutes();

  let hoursIn12HrFormat = hours >= 13 ? hours % 12 : hours;

  let ampm = hours >= 12 ? "pm" : "am";

  const currentTime =
    (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    `${ampm}`;

  //console.log(currentTime);

  return currentTime;
}

function setDateAsPerZone(timeStamp, timezone) {
  const newDate = new Date((timeStamp + timezone) * 1000);

  let day = days[newDate.getUTCDay()];
  let month = months[newDate.getUTCMonth()];
  let date = newDate.getUTCDate();

  const currentDate = `${day} ${month}${date}`;
  return currentDate;
}

//Function to get Data by Search a CityName
async function getDataBySearch() {
  let city = document.getElementById("query").value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03440e5c622f3b2bfcc1202821456fdb&units=metric`;
  try {
    let res = await fetch(url);
    let data = await res.json();
    //console.log(data);
    appendSearchedCity(data);
    weeklyForecast(data.coord.lat, data.coord.lon);
    map.style.display = "block";
  } catch (error) {
    console.log(error);
    const container = document.querySelector(".weatherInfo");

    return (
      (container.innerHTML = `<h1>Invalid City Name</h1>`),
      (map.style.display = "none")
    );
  }
}

function appendSearchedCity(data) {
  const container = document.querySelector(".weatherInfo");

  container.innerHTML = null;
  container.style.border = "1px solid #eee";
  container.style.background = "rgba(24, 24, 27, 0.6)";

  let url = `https://maps.google.com/maps?q=${data.name},&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  let update = document.createElement("p");
  update.innerText = `Last updated at : -`;

  let dateTimeCity = document.createElement("div");
  dateTimeCity.setAttribute("class", "dateTimeCity");
  let dateTime = document.createElement("h2");
  dateTime.innerText =
    setTimeAsPerZone(data.dt, data.timezone) +
    ", " +
    setDateAsPerZone(data.dt, data.timezone);

  let city = document.createElement("h1");
  city.innerText = `${data.name}, ${data.sys.country}`;

  dateTimeCity.append(dateTime, city);

  let tempDiv = document.createElement("div");
  tempDiv.setAttribute("class", "tempDiv");

  let cloudImg = document.createElement("img");
  cloudImg.src = `./Images/weather_icons/${data.weather[0].icon}.png`;

  let temp = document.createElement("h1");
  temp.innerText = `${data.main.temp}°C`;

  tempDiv.append(cloudImg, temp);

  let feelDesc = document.createElement("h3");
  feelDesc.innerText = `Feels like: ${data.main.feels_like}°C, ${data.weather[0].description}`;
  feelDesc.style.fontSize = "18px";

  let infoDiv = document.createElement("div");
  infoDiv.setAttribute("class", "infoDiv");

  let maxMinTempDiv = document.createElement("div");
  let tempmax = document.createElement("p");
  tempmax.innerText = `Max temp:- ${data.main.temp_max}°C`;
  let tempmin = document.createElement("p");
  tempmin.innerText = `Min temp:- ${data.main.temp_min}°C`;
  maxMinTempDiv.append(tempmax, tempmin);

  let windHumidityDiv = document.createElement("div");
  let windData = document.createElement("p");
  windData.innerText = `Wind data:- {Speed:- ${data.wind.speed}mph, Deg:- ${data.wind.deg}°}`;
  let humidity = document.createElement("p");
  humidity.innerText = `Humidity:- ${data.main.humidity}%`;
  windHumidityDiv.append(windData, humidity);

  let sunRiseSetDiv = document.createElement("div");
  let sunrise = document.createElement("p");
  sunrise.innerText = `Sunrise:- ${setTimeAsPerZone(
    data.sys.sunrise,
    data.timezone
  )}`;
  let sunset = document.createElement("p");
  sunset.innerText = `Sunset:- ${setTimeAsPerZone(
    data.sys.sunset,
    data.timezone
  )}`;
  sunRiseSetDiv.append(sunrise, sunset);

  infoDiv.append(maxMinTempDiv, windHumidityDiv, sunRiseSetDiv);

  container.append(update, dateTimeCity, tempDiv, feelDesc, infoDiv);

  let iframe = document.getElementById("gmap_canvas");
  iframe.src = url;
}

function getLocation() {
  document.getElementById("query").value = "";
  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    const crd = position.coords;

    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
    getWeatherOnLocation(crd.latitude, crd.longitude);
  }
}

async function getWeatherOnLocation(lat, lon) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=03440e5c622f3b2bfcc1202821456fdb&units=metric`;

  let res = await fetch(url);
  let data = await res.json();
  //console.log(data);
  appendSearchedCity(data);
  weeklyForecast(lat, lon);
}
window.addEventListener("load", getLocation());

async function weeklyForecast(latitude, longitude) {
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=03440e5c622f3b2bfcc1202821456fdb&units=metric`;

  let res = await fetch(url);
  let data = await res.json();
  //console.log(data);
  showWeeklyData(data.daily);
}

function showWeeklyData(data) {
  let container = document.querySelector(".weeklyForecast");
  container.innerHTML = null;

  // let heading = document.createElement("h2");
  // heading.innerText = `Weekly Forecast :-`;
  // container.append(heading);

  data.forEach((elem) => {
    let timeStamp = elem.dt;
    let day = new Date(timeStamp * 1000);

    let dayOfWeek =
      days[day.getDay()] + ", " + months[day.getMonth()] + day.getDate();

    let weekDay = document.createElement("h4");
    weekDay.innerText = dayOfWeek;

    let image = document.createElement("img");
    image.src = `./Images/weather_icons/${elem.weather[0].icon}.png`;

    let dayTemp = document.createElement("p");
    dayTemp.innerText = `Day:- ${elem.temp.day}°C`;

    let nightTemp = document.createElement("p");
    nightTemp.innerText = `Night:- ${elem.temp.night}°C`;

    let div = document.createElement("div");
    div.append(weekDay, image, dayTemp, nightTemp);
    container.append(div);
  });
}
