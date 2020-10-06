class Elem {
  constructor(name, clName, parent){
    this.elementRef = document.createElement(name);
    this.elementRef.className = clName;
    parent.appendChild(this.elementRef);
  }
}

export { Elem };
