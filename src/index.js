//change city name according to the input
function getCity() {
  let cityEntered = document.querySelector(".enter-city");
  return cityEntered.value;
}
function displayWeather(response) {
  let currentTemperature = document.querySelector("#current-temperature-value");
  currentTemperature.innerHTML = `${Math.round(
    response.data.temperature.current
  )}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.city}`;
}
function search(event) {
  event.preventDefault();
  let city = getCity();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=ec3f3cc5ba623cbcd7873aab4b1c3t0o&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

//show current day and time
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentDayTime = document.querySelector("#current-day-time");
currentDayTime.innerHTML = `${day} ${now.getHours()}:${now.getMinutes()}`;
