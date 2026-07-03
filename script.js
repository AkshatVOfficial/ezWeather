const cityName = document.getElementById("city");
const date = document.getElementById("date");
const temperature = document.getElementById("temperature");
const weatherReport = document.getElementById("weather-report");
const humidityValue = document.getElementById("humidity");
const windValue = document.getElementById("wind");
const pressureValue = document.getElementById("pressure");
const visibilityValue = document.getElementById("visibility");
const now = new Date();

select.addEventListener("change", () => {
  const nameOfCity = cityList[select.value];
});

const today = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
async function weather(url) {
  const response = await fetch(url);
  const result = await response.json();
  date.innerText = today;
  cityName.innerText = result.name;
  temperature.innerText = result.main.temp + "°C";
  weatherReport.innerText = result.weather[0].description;
  humidityValue.innerText = result.main.humidity;
  windValue.innerText = result.wind.speed + "km/hr";
  pressureValue.innerText = result.main.pressure;
  visibilityValue.innerText = result.visibility;
}
weather(
  `https://api.openweathermap.org/data/2.5/weather?q=bijnor&appid=b55d8b8e5c2ce0a965c2937c10f98f16&units=metric`,
);

select.addEventListener("change", () => {
  weather(
    `https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=b55d8b8e5c2ce0a965c2937c10f98f16&units=metric`,
  );
});
