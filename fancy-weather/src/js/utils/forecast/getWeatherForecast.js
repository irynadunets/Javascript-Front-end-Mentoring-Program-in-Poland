function getWeatherForecast(location) {

  return fetch(`http://api.weatherapi.com/v1/forecast.json?key=b7d7fa161ac24e23b45171946202809&q=${location}&days=7`).then((response) => response.json())
    .catch((e) => {
      console.log(e);
    });
}

export { getWeatherForecast };
