import { getWeatherByTown } from './getWeatherByTown';
import { forecastInfo } from '../forecast/forecastInfo';
import { getCurrentTime } from '../date/getCurrentTime';
import { initMap } from '../map/initMap';

 async function changeLocationFromInput() {
   document.getElementById('search-button').onclick = async (event) => {
   	try {
      event.preventDefault();
      let city = document.getElementsByClassName('input')[0].value;
      let forecast = await getWeatherByTown(city.toString());
      let latitude = forecast.location.lat;
      let longitude = forecast.location.lon;
      document.getElementsByClassName('latitude')[0].innerHTML = 'latitude: ' + latitude;
      document.getElementsByClassName('longitude')[0].innerHTML = 'longitude: ' + longitude;
      forecastInfo(forecast);
      document.getElementsByClassName('time')[0].innerHTML = forecast.current.last_updated.substr(11, 5);      
      let map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: latitude, lng: longitude },
          zoom: 8,
        });
     } catch(e) {
     	log(e);
     }
   };
}

export { changeLocationFromInput };
