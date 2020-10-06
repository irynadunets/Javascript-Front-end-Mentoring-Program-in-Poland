import { Elem  } from './Elem.js';

class navLink extends Elem{
  constructor(parent, href, text){
    super("a", "navigation__link", parent);
    this.elementRef.href = href;
    this.elementRef.text = text;
    this.elementRef.style.color =  "#0d4261";
    this.elementRef.style.textDecoration = "none";
  }
}

export { navLink };
