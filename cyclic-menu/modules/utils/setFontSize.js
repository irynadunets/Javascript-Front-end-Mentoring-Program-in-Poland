let setFontSize = (element, index, fontSize) => {
  element.elementRef.children[index].style.fontSize = fontSize;
}

export { setFontSize };
