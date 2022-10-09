//https://api.openweathermap.org/data/2.5/weather?q=Jakarta
//&appid=563b9aee6044b73b0963897e5c5da906&units=metric

const url = "https://api.openweathermap.org/data/2.5/weather"; //base url
const key = "563b9aee6044b73b0963897e5c5da906"; //personal api key and units measurement

let weather = {
  fetchWeather: function (city) {
    //fetching data from API
    let full_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetch(full_url)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    //displaying result to DOM
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = `Cuaca di ${name}`;
    document.querySelector(".temp").innerText = `${temp}°C`;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = `Kelembapan: ${humidity}%`;
    document.querySelector(".wind").innerText = `Kecepatan angin: ${speed}km/h`;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.getElementById("search-btn").addEventListener("click", function () { //Activating search button
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) { //Search by 'enter' key
	if(event.key == "Enter") {
		weather.search();
	}
})

