function audioForecast(element, forecast) {
  const el = element;
  el.onclick = function () {
    event.preventDefault();
    const str = `${forecast.location.tz_id} wheather forecast.  It’s ${forecast.current.condition.text
    } most of the time.  The temperature is ${forecast.current.temp_c} degree C. Wind will be ${forecast.current.wind_mph} m/s pressure ${
      forecast.current.pressure_mb} today.`;
    const msg = new SpeechSynthesisUtterance(str);
    const voices = window.speechSynthesis.getVoices();
    msg.voice = voices[17];
    msg.voiceURI = '16';
    msg.rate = 0.7;
    msg.pitch = 1;
    msg.volume = 0.6;
    window.speechSynthesis.speak(msg);
  };
}

export { audioForecast };
