import { listenEvents } from './modules/utils/listenEvents.js';
import { header, list } from './modules/utils/createMenu.js';
import { menu } from './modules/utils/onloadMenu.js';

//menu();
listenEvents(list);
