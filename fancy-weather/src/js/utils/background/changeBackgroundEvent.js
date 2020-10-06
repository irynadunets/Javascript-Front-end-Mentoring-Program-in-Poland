import { setBackgroundImage } from './setBackgroundImage';

function changeBackgroundEvent(element, dayTime, month, index) {
  const el = element;
  let i = index;
  el.onclick = function () {
    switch (month) {
      case 'January':
      case 'February':
      case 'December':
        if (dayTime === 'night') {
          setBackgroundImage('night-winter');
        } else {
          setBackgroundImage('day-winter');
        }
        break;
      case 'March':
      case 'April':
      case 'May':
        if (dayTime === 'night') {
          setBackgroundImage('night-spring');
        } else {
          setBackgroundImage('day-spring');
        }
        break;
      case 'June':
      case 'July':
      case 'August':
        if (dayTime === 'night') {
          const k = i < 12 ? i + 1 : 1;
          setBackgroundImage(`night-summer-${k.toString()}`);
          i = k;
        } else {
          const k = i < 23 ? i + 1 : 1;
          setBackgroundImage(`day-summer-${k.toString()}`);
          i = k;
        }
        break;
      case 'September':
      case 'October':
      case 'November':
      if (dayTime === 'night') {
        const k = i < 13 ? i + 1 : 1;
        setBackgroundImage(`night-autumn-${k.toString()}`);
        i = k;
      } else {
        const k = i < 23 ? i + 1 : 1;
        setBackgroundImage(`day-outum-${k.toString()}`);
        i = k;
      }
        break;
      default:
        break;
    }
  };
}

export { changeBackgroundEvent };
