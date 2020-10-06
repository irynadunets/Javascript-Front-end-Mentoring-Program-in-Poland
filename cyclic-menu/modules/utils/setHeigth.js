let setHeigth = (element, index, height) => {
  element.elementRef.children[index].style.height = height;
}

export { setHeigth };
