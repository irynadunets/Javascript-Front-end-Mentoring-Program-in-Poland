function getLocation() {
  const LOCATION_API_TOKEN = '485e3197e6ba07';
  return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`).then((response) => response.json())
    .catch((e) => {
      console.log(e);
    });
}

export { getLocation };
