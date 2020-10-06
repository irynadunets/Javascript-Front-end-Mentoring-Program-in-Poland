function updateTime(k) {
  return k < 10 ? `0${k}` : k;
}

function getCurrentTime() {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let midday = 'AM';
  midday = hour >= 12 ? 'PM' : 'AM';
  hour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  min = updateTime(min);
  document.getElementsByClassName('time')[0].innerHTML = `${hour} : ${min}  ${midday}`;
}

export { getCurrentTime };
