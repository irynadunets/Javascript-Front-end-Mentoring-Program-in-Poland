import { feelsLike } from '../../data/textConstants';

function changeCelciusFarengeitEvent(forecast) {
  const buttonFar = document.getElementsByClassName('farengeit-button')[0];
  buttonFar.onclick = function () {
    document.getElementsByClassName('temperature')[0].innerHTML = `${forecast.current.temp_f.toString().substr(0, 2)}°F`;
    document.getElementsByClassName('feels-like')[0].innerHTML = `${feelsLike + forecast.current.feelslike_f}°F`;
    for (let i = 0; i < 3; i += 1) {
      document.getElementsByClassName('temperature'.concat('', i + 1))[0].innerHTML = `${forecast.forecast.forecastday[i].day.avgtemp_f}°F`;
    }
    window.localStorage.setItem('temperature', '°F');
  };
  const buttonCel = document.getElementsByClassName('celcius-button')[0];
  buttonCel.onclick = function () {
    document.getElementsByClassName('temperature')[0].innerHTML = `${forecast.current.temp_c}°C`;
    document.getElementsByClassName('feels-like')[0].innerHTML = `${feelsLike + forecast.current.feelslike_c}°C`;
    for (let i = 0; i < 3; i += 1) {
      document.getElementsByClassName('temperature'.concat('', i + 1))[0].innerHTML = `${forecast.forecast.forecastday[i].day.avgtemp_c}°C`;
    }
    window.localStorage.setItem('temperature', '°C');
  };
}
export { changeCelciusFarengeitEvent };
