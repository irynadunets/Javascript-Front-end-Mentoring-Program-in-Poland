import { selectElement } from './selectElement.js';
import { items } from '../data/menuItems.js';

let listenEvents = (list) => {

let current = 0;
const count = items.length;
selectElement(list, current, "#fb8261", "35px", "150px");

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      selectElement(list, current, "#fbcf61", "30px", "100px");
      current = current > 0 ? current - 1 : count - 1;
      selectElement(list, current, "#fb8261","35px", "150px");
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      selectElement(list, current, "#fbcf61", "30px", "100px");
      current = current < count - 1 ? current + 1 : 0;
      selectElement(list, current, "#fb8261", "35px", "150px");
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

}

export { listenEvents };
