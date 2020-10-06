function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? null :
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

module.exports =  getDayOfWeek;
