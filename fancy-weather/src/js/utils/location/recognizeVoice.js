import { getWeatherByTown } from './getWeatherByTown';
import { forecastInfo } from '../forecast/forecastInfo';
import { getCurrentTime } from '../date/getCurrentTime';
import { initMap } from '../map/initMap';

function recognizeVoice(element) {
  const el = element;
  var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  el.onclick = function () {
    alert('Recognition start. Say the name of the city');
    recognition.start();
  }
  recognition.onresult = function(event) {
    event.preventDefault();
    const city = event.results[0][0].transcript;
    console.log(city);
    document.getElementsByClassName('input-icon').value = city;
  };
}

export { recognizeVoice };
