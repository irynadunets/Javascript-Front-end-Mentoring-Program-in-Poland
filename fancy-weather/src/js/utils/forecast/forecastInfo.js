import {
  feelsLike, wind, humidity, months,
} from '../../data/textConstants';
import { getDayOfWeek } from '../date/getDayOfWeek';
import { changeBackgroundEvent } from '../background/changeBackgroundEvent';
import { googleTranslateElementInit } from '../translate/googleTranslateElementInit';
import { changeCelciusFarengeitEvent } from '../forecast/changeCelciusFarengeitEvent';
import { audioForecast } from '../forecast/audioForecast';
import { recognizeVoice } from '../location/recognizeVoice';

require.context('../../../assets/background', true, /\.jpg$/);
require.context('../../../assets/buttons', true, /\.jpg$/);
require.context('../../../assets/day', true, /\.png$/);
require.context('../../../assets/night', true, /\.png$/);

function forecastInfo(forecast) {

  const localStorageTemperature = window.localStorage.getItem('temperature');
  const date = new Date(forecast.current.last_updated);
  const month = months[date.getMonth()];
  const place = forecast.location.tz_id;
  const country = forecast.location.country;
  const description = forecast.current.condition.text;
  const temperature = localStorageTemperature === '°F' ? `${forecast.current.temp_f.toString().substr(0, 2)}°F` : `${forecast.current.temp_c}°C`;
  const feelsTemp = localStorageTemperature === '°F' ? `${feelsLike + forecast.current.feelslike_f}°F` : `${forecast.current.feelslike_c}°C`;

  const itemsWhehter = [
    { element: 'place', text: `${place}, ${country}` },
    { element: 'date', text: `${date.toString().substr(0, 3)} ${forecast.current.last_updated.substr(8, 2)} ${month}` },
    { element: 'temperature', text: temperature },
    { element: 'description', text: description },
    { element: 'feels-like', text: feelsLike + feelsTemp },
    { element: 'wind', text: `${wind + forecast.current.wind_mph}m/c` },
    { element: 'humidity', text: `${humidity + forecast.current.humidity}%` },
  ];

  itemsWhehter.forEach((i) => {
    const keys = Object.keys(i);
    document.getElementsByClassName(i[keys[0]])[0].innerHTML = i[keys[1]];
  });

  document.getElementsByClassName('icon-currently')[0].src = 'src/assets'.concat('', forecast.current.condition.icon.substr(34));

  for (let i = 0; i < 3; i += 1) {
    const dayDescription = forecast.forecast.forecastday[i].day.condition.text;
    const dayWeek = getDayOfWeek(forecast.forecast.forecastday[i].date);
    const dayAvgtemp = localStorageTemperature === '°F' ? `${forecast.forecast.forecastday[i].day.avgtemp_f}°F` : `${forecast.forecast.forecastday[i].day.avgtemp_c}°C`;
    document.getElementsByClassName('day'.concat('', i + 1))[0].innerHTML = dayWeek;
    document.getElementsByClassName('temperature'.concat('', i + 1))[0].innerHTML = dayAvgtemp;
    document.getElementsByClassName('icon'.concat('', i + 1))[0].src = 'src/assets'.concat('', forecast.forecast.forecastday[i].day.condition.icon.substr(34));
    document.getElementsByClassName('description'.concat('', i + 1))[0].innerHTML = dayDescription;
  }

  const buttonREf = document.getElementsByClassName('refresh-button')[0];
  const buttonAud = document.getElementsByClassName('audio-button')[0];
  const icon = document.getElementById('input-icon');
  const i = 1;
  const dayTime = forecast.current.condition.icon.substr(35, 5);
  document.getElementsByClassName('language-buttons')[0].setAttribute('id', 'google_translate_element');

  changeBackgroundEvent(buttonREf, dayTime, month, i);
  audioForecast(buttonAud, forecast);
  recognizeVoice(icon);
  changeCelciusFarengeitEvent(forecast);
  googleTranslateElementInit();
}

export { forecastInfo };
