function getForecastWeather(location, APIkey) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${APIkey}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

function filterDataFromWeatherAPI(data) {
  if (!data) {
    return null;
  }
  const weather = {};
  weather.city = data.name;
  weather.temperature = data.main.temp;
  return weather;
}

export { getForecastWeather, filterDataFromWeatherAPI };