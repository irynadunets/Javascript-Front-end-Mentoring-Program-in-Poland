const items = [
  {
    element: 'header', name: 'header', clName: 'header', child: null, parent: 'body', id: 0,
  },
  {
    element: 'headerButtons', name: 'div', clName: 'header-buttons', child: null, parent: 'header', id: 0,
  },
  {
    element: 'refreshButton', name: 'button', clName: 'refresh-button', child: null, parent: 'div', id: 0,
  },
  {
    element: 'audioButton', name: 'button', clName: 'audio-button', child: null, parent: 'div', id: 0,
  },
  {
    element: 'inputIcon', name: 'label', clName: 'fa fa-microphone input-iconV', child: null, parent: 'div', id: 0,
  },
  {
    element: 'languageButtons', name: 'div', clName: 'language-buttons', child: null, parent: 'div', id: 0,
  },
  {
    element: 'temperatureButtons', name: 'div', clName: 'temperature-buttons', child: null, parent: 'div', id: 0,
  },
  {
    element: 'farengeitButton', name: 'button', clName: 'farengeit-button', child: null, parent: 'div', id: 2,
  },
  {
    element: 'celciusButton', name: 'button', clName: 'celcius-button', child: null, parent: 'div', id: 2,
  },
  {
    element: 'searchForm', name: 'form', clName: 'search-form', child: null, parent: 'header', id: 0,
  },
  {
    element: 'input', name: 'input', clName: 'input', child: null, parent: 'form', id: 0,
  },
  {
    element: 'inputIcon', name: 'label', clName: 'fa fa-microphone input-icon', child: null, parent: 'form', id: 0,
  },
  {
    element: 'searchButton', name: 'button', clName: 'search-button', child: null, parent: 'form', id: 0,
  },
  {
    element: 'wrapper', name: 'div', clName: 'wrapper', child: null, parent: 'body', id: 0,
  },
  {
    element: 'whetherCurrently', name: 'section', clName: 'whether-currently', child: null, parent: 'div', id: 3,
  },
  {
    element: 'place', name: 'h1', clName: 'place', child: null, parent: 'section', id: 0,
  },
  {
    element: 'date', name: 'div', clName: 'date', child: null, parent: 'section', id: 0,
  },
  {
    element: 'time', name: 'div', clName: 'time', child: null, parent: 'section', id: 0,
  },
  {
    element: 'temperature', name: 'div', clName: 'temperature', child: null, parent: 'section', id: 0,
  },
  {
    element: 'icon', name: 'img', clName: 'icon-currently', child: null, parent: 'section', id: 0,
  },
  {
    element: 'whetherData', name: 'div', clName: 'whether-data', child: null, parent: 'section', id: 0,
  },
  {
    element: 'description', name: 'div', clName: 'description', child: null, parent: 'div', id: 7,
  },
  {
    element: 'feelsLike', name: 'div', clName: 'feels-like', child: null, parent: 'div', id: 7,
  },
  {
    element: 'wind', name: 'div', clName: 'wind', child: null, parent: 'div', id: 7,
  },
  {
    element: 'humidity', name: 'div', clName: 'humidity', child: null, parent: 'div', id: 7,
  },
  {
    element: 'mapLocation', name: 'section', clName: 'map-location', child: null, parent: 'section', id: 0,
  },
  {
    element: 'map', name: 'div', clName: 'map', child: null, parent: 'section', id: 1,
  },
  {
    element: 'latitude', name: 'div', clName: 'latitude', child: null, parent: 'section', id: 1,
  },
  {
    element: 'longitude', name: 'div', clName: 'longitude', child: null, parent: 'section', id: 1,
  },
  {
    element: 'whetherForecast', name: 'section', clName: 'whether-forecast', child: null, parent: 'div', id: 3,
  },
  {
    element: 'firstDayWhetherForecast', name: 'div', clName: 'firstDayWhetherForecast', child: null, parent: 'section', id: 2,
  },
  {
    element: 'day', name: 'div', clName: 'day1', child: null, parent: 'div', id: 15,
  },
  {
    element: 'temperature', name: 'div', clName: 'temperature1', child: null, parent: 'div', id: 15,
  },
  {
    element: 'icon', name: 'img', clName: 'icon1', child: null, parent: 'div', id: 15,
  },
  {
    element: 'description', name: 'div', clName: 'description1', child: null, parent: 'div', id: 15,
  },
  {
    element: 'secondDayWhetherForecast', name: 'div', clName: 'secondDayWhetherForecast', child: null, parent: 'section', id: 2,
  },
  {
    element: 'day', name: 'div', clName: 'day2', child: null, parent: 'div', id: 19,
  },
  {
    element: 'temperature', name: 'div', clName: 'temperature2', child: null, parent: 'div', id: 19,
  },
  {
    element: 'icon', name: 'img', clName: 'icon2', child: null, parent: 'div', id: 19,
  },
  {
    element: 'description', name: 'div', clName: 'description2', child: null, parent: 'div', id: 19,
  },
  {
    element: 'thirdDayWhetherForecast', name: 'div', clName: 'thirdDayWhetherForecast', child: null, parent: 'section', id: 2,
  },
  {
    element: 'day', name: 'div', clName: 'day3', child: null, parent: 'div', id: 23,
  },
  {
    element: 'temperature', name: 'div', clName: 'temperature3', child: null, parent: 'div', id: 23,
  },
  {
    element: 'icon', name: 'img', clName: 'icon3', child: null, parent: 'div', id: 23,
  },
  {
    element: 'description', name: 'div', clName: 'description3', child: null, parent: 'div', id: 23,
  },
];

export { items };
