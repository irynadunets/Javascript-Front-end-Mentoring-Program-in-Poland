const createElement = (name, clName, child, parent) => {
  const element = document.createElement(name);
  element.className = clName;
  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (typeof child === 'string') {
    element.innerHTML = child;
  }
  if (parent) parent.appendChild(element);
  return element;
};

export { createElement };
