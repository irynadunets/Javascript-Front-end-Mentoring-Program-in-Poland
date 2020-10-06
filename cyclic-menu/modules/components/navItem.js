import { Elem  } from './Elem.js';

class navItem extends Elem{
  constructor(parent){
    super("li", "navigation__item",  parent);
    this.elementRef.style.backgroundColor = "#fbcf61";
    this.elementRef.style.fontSize = "30px";
    this.elementRef.style.width = "100px";
    this.elementRef.style.height = "50px";
    this.elementRef.style.padding = "2rem 2rem 2rem 2rem";
  }
}

export { navItem };
