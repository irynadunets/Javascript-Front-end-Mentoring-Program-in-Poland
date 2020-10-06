import { Elem  } from './Elem.js';

class navList extends Elem{
  constructor(parent){
    super("ul", "navigation__ul", parent);
    this.elementRef.style.listStyle = "none";
    this.elementRef.style.display = "flex";
    this.elementRef.style.flexDirection = "row";
    this.elementRef.style.justifyContent = "space-around";
    this.elementRef.style.flexWrap = "wrap";
    this.elementRef.style.margin = "2rem 2rem 2rem 2rem";
  }
}

export { navList };
