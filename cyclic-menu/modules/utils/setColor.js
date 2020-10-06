
let setColor = (element, index, width) => {
  element.elementRef.children[index].style.backgroundColor = width;
}

export { setColor };
