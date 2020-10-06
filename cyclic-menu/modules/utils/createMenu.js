import { items } from '../data/menuItems.js';
import { navLink } from '../components/navLink.js';
import { navItem } from '../components/navItem.js';
import { navList } from '../components/navList.js';
import { navElem } from '../components/navElem.js';

const header = document.createElement("header");
const nav = new navElem(header);
const list = new navList(nav.elementRef);
let navItems = items.map(el => {
  let item = new navItem(list.elementRef);
  let link = new navLink(list.elementRef.children[items.indexOf(el)], el.href, el.text);
  return list;
});

export { header, list };
