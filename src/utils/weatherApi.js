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
  weather.temperature.F = `${Math.round(data.main.temp)}°F`;
  weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;
  return weather;
}

function weatherType(data) {
  if (data.main.temp >= 86) {
    return 'hot';
  } else if (data.main.temp >= 66 && data.main.temp <= 85) {
    return 'warm';
  } else if (data.main.temp <= 65) {
    return 'cold';
  }
}

export { getForecastWeather, filterDataFromWeatherAPI, weatherType };