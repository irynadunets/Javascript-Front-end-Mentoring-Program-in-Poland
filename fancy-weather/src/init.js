import { items } from './js/data/layoutItems';
import { layoutsButtons } from './js/data/layoutsButtons';
import { placeHolderText } from './js/data/textConstants';
import { createElement } from './js/utils/date/createElement';
import { getLocation } from './js/utils/location/getLocation';
import { getWeatherForecast } from './js/utils/forecast/getWeatherForecast';
import { forecastInfo } from './js/utils/forecast/forecastInfo';
import { initMap } from './js/utils/map/initMap';
import { getCurrentTime } from './js/utils/date/getCurrentTime';
import { changeLocationFromInput } from './js/utils/location/changeLocationFromInput';

async function init() {

  try {
    items.forEach((item) => {
      const i = item;
      const keys = Object.keys(i);
      const k = i[keys[5]];
      i[keys[0]] = createElement(i[keys[1]], i[keys[2]], i[keys[3]],
        document.getElementsByTagName(i[keys[4]])[k]);
    });

    layoutsButtons.forEach((i) => {
      const keys = Object.keys(i);
      document.getElementsByClassName(i[keys[0]])[0].innerHTML = i[keys[1]];
    });

    document.getElementsByClassName('input')[0].placeholder = placeHolderText;
    document.getElementsByClassName('map')[0].setAttribute('id', 'map');
    document.getElementsByClassName('input')[0].setAttribute('id', 'input');
    document.getElementsByClassName('input-icon')[0].setAttribute('id', 'input-icon');
    document.getElementsByClassName('search-button')[0].setAttribute('id', 'search-button');

    const buttonREf = document.getElementsByClassName('refresh-button')[0];
    const ir = document.createElement('img');
    const srcIm = 'src/assets/buttons/refresh.jpg';
    ir.setAttribute('src', srcIm);
    buttonREf.appendChild(ir);

    const buttonAud = document.getElementsByClassName('audio-button')[0];
    const ai = document.createElement('img');
    const srcIa = 'src/assets/buttons/audio.jpg';
    ai.setAttribute('src', srcIa);
    buttonAud.appendChild(ai);

    const location = await getLocation();

    let latitude = location.loc.substr(0, 7);
    let longitude = location.loc.substr(-7);
    document.getElementsByClassName('latitude')[0].innerHTML = 'latitude: ' + latitude.substr(0,2) + '°' + latitude.substr(3,2) + `'`;
    document.getElementsByClassName('longitude')[0].innerHTML = 'longitude: ' + longitude.toString().substr(0,2) + '°' + longitude.substr(3,2) + `'`;

    let forecast = await getWeatherForecast(location.loc.toString());
    forecastInfo(forecast);
    getCurrentTime();

    changeLocationFromInput();

  } catch (e) {
    console.log(e);
  }

}

export { init };
