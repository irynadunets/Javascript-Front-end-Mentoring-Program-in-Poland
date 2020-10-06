import { Elem  } from './Elem.js';

class navElem extends Elem{
  constructor(parent){
    super("nav", "navigation", parent);
    this.elementRef.style.backgroundColor = "#e0e0e0";
    this.elementRef.style.width = "100%";
    this.elementRef.style.height = "20%";
    this.elementRef.style.padding = "1% 0.1% 1% 0.1%";
  }
}

export { navElem };
