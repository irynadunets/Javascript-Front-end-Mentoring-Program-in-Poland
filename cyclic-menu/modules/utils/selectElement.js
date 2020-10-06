import { setColor } from './setColor.js';
import { setFontSize } from './setFontSize.js';
import { setWidth } from './setWidth.js';

let selectElement = (element, index, color, fontSize, width) => {
  setColor(element, index, color);
  setFontSize(element, index, fontSize);
  setWidth(element, index, width);
}

export { selectElement };
