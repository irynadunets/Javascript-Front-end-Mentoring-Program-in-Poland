let setWidth = (element, index, width) => {
  element.elementRef.children[index].style.width = width;  
}

export { setWidth };
