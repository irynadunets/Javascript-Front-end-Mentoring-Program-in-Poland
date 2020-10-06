class VirtualKeyboard {
  constructor() {
    this.Layout = {
      eng: [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
        'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ł', "'", 'Enter',
        'Shift', 'Eng', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►',
      ],
      engShift: [
        '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'DEL',
        'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
        'Shift', 'Eng', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►',
      ],
      ru: [
        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
        'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'Rus', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►',
      ],
      ruShift: [
        'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'DEL',
        'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
        'Shift', 'Rus', 'Я', 'Ч', 'С', 'М', 'И', 'Е', 'Ь', 'Б', 'Ю', ',', '▲', 'shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►',
      ],
      codeKey: [
        'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
        'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
        'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
        'ShiftLeft', 'Eng', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
        'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
      ],
    };
    this.container = createElement('div', 'container');
    this.textarea = createElement('textarea', 'textarea', null, null, 'disabled', 'disabled');
    this.language = this.getlocalStorage('language') || this.Layout.eng;
    this.keysContainer = createElement('div', 'keys', this.displayKeys(this.language));
    this.keyboard = createElement('div', 'keyboard', this.keysContainer);
    this.info = createElement('p', 'info');
    this.keys = [];
    this.text = '';
  }

  getlocalStorage(value) {
    switch (getStorageItem(value)) {
      case 'eng':
        this.language = this.Layout.eng;
        break;
      case 'engShift':
        this.language = this.Layout.engShift;
        break;
      case 'ru':
        this.language = this.Layout.ru;
        break;
      case 'ruShift':
        this.language = this.Layout.ruShift;
        break;
      default:
        break;
    }
    return this.language;
  }

  changeItemLanguage(language) {
    this.keys.forEach((item, i) => {
      const el = item;
      el.textContent = language[i];
    });
    this.language = language;
    this.keys = this.keysContainer.querySelectorAll('.button');
  }

  changeKeyboardLanguage() {
    switch (this.language) {
      case this.Layout.eng:
        this.changeItemLanguage(this.Layout.ru);
        setStorageItem('language', 'ru');
        break;
      case this.Layout.engShift:
        this.changeItemLanguage(this.Layout.ruShift);
        setStorageItem('language', 'ruShift');
        break;
      case this.Layout.ru:
        this.changeItemLanguage(this.Layout.eng);
        setStorageItem('language', 'eng');
        break;
      case this.Layout.ruShift:
        this.changeItemLanguage(this.Layout.engShift);
        setStorageItem('language', 'engShift');
        break;
      default:
        break;
    }
  }

  changeUpDownKeyboard() {
    switch (this.language) {
      case this.Layout.eng:
        this.changeItemLanguage(this.Layout.engShift);
        setStorageItem('language', 'engShift');
        break;
      case this.Layout.engShift:
        this.changeItemLanguage(this.Layout.eng);
        setStorageItem('language', 'eng');
        break;
      case this.Layout.ru:
        this.changeItemLanguage(this.Layout.ruShift);
        setStorageItem('language', 'ruShift');
        break;
      case this.Layout.ruShift:
        this.changeItemLanguage(this.Layout.ru);
        setStorageItem('language', 'ru');
        break;
      default:
        break;
    }
  }

  displayKeyboard() {
    this.info.textContent = 'OS Linux : CHANGE LANGUAGE : Shift + Ctrl left';
    this.keys = this.keysContainer.querySelectorAll('.button');
    this.container.append(this.textarea, this.keyboard, this.info);
    document.body.append(this.container);
  }

  displayKeys(language) {
    this.fragment = document.createDocumentFragment();
    language.forEach((value, index) => {
      const key = createElement('button', 'button', null, null, 'type', 'button');
      key.textContent = value;
      const breakLine = ['Backspace', 'DEL', 'Enter', 'shift'].indexOf(value) !== -1;
      key.id = this.Layout.codeKey[index];
      switch (value) {
        case 'Backspace':
        case 'Caps Lock':
        case 'Shift':
          addClass(key, 'wide');
          break;
        case 'Tab':
        case 'DEL':
          addClass(key, 'tab');
          break;
        case 'Enter':
          addClass(key, 'enter');
          break;
        case ' ':
          addClass(key, 'space');
          break;
        case 'Ctrl':
          addClass(key, 'ctrl');
          break;
        case 'shift':
        case 'Win':
        case 'Alt':
        case '▲':
        case '◄':
        case '▼':
        case '►':
          addClass(key, 'arrows');
          break;
        default:
          break;
      }
      this.fragment.appendChild(key);
      if (breakLine) this.fragment.appendChild(document.createElement('br'));
    });
    return this.fragment;
  }

  keysEvents() {
    this.keyDownEvents();
    this.keyUpEvents();
    this.mouseDownEvents();
    this.mouseUpEvents();
  }

  keyDownEvents() {
    document.body.addEventListener('keydown', (event) => {
      event.preventDefault();
      const key = this.keysContainer.querySelector(`.button[id = "${event.code}"]`);
      key.classList.add('button_pressed');
      if (event.key.length === 1) {
        this.text += key.textContent;
        this.displayTextElement(this.text);
      } else if (event.code === 'Backspace') {
        const textareaLength = this.textarea.value.length;
        this.text = this.textarea.value.substring(0, textareaLength - 1);
        this.displayTextElement(this.text);
      } else if (event.code === 'Delete') {
        const textareaLength = this.textarea.value.length;
        this.text = this.textarea.value.substring(0, textareaLength - 1);
        this.displayTextElement(this.text);
      } else if (event.code === 'Tab') {
        this.text += '    ';
        this.displayTextElement(this.text);
      } else if (event.code === 'Enter') {
        this.text += '\n';
        this.displayTextElement(this.text);
      } else if (event.code === 'Space') {
        this.text += ' ';
        this.displayTextElement(this.text);
      } else if (event.code === 'CapsLock') {
        if (event.repeat) return;
        this.changeUpDownKeyboard();
      } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (!event.repeat) this.changeUpDownKeyboard();
      } else if (event.code === 'ArrowUp') {
        this.text += '▲';
        this.displayTextElement(this.text);
      } else if (event.code === 'ArrowLeft') {
        this.text += '◄';
        this.displayTextElement(this.text);
      } else if (event.code === 'ArrowRight') {
        this.text += '►';
        this.displayTextElement(this.text);
      } else if (event.code === 'ArrowDown') {
        this.text += '▼';
        this.displayTextElement(this.text);
      } else if (event.shiftKey && event.code === 'ControlLeft') {
        this.changeKeyboardLanguage();
      }
    });
  }

  keyUpEvents() {
    document.body.addEventListener('keyup', (event) => {
      event.preventDefault();
      const key = this.keysContainer.querySelector(`.button[id = "${event.code}"]`);
      key.classList.remove('button_pressed');
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') this.changeUpDownKeyboard();
    });
  }

  mouseDownEvents() {
    document.body.addEventListener('mousedown', (event) => {
      if (event.target.tagName === 'BUTTON') event.target.classList.add('button_pressed');
      this.keys.forEach((elem) => {
        const target = event.target === elem;
        if (target && elem.textContent.length === 1) {
          this.text += elem.textContent;
          this.displayTextElement(this.text);
        } else if (target && elem.id === 'Backspace') {
          const lenght = this.textarea.value.length;
          this.text = this.textarea.value.substring(0, lenght - 1);
          this.displayTextElement(this.text);
        } else if (target && elem.id === 'Delete') {
          const lenght = this.textarea.value.length;
          this.text = this.textarea.value.substring(0, lenght - 1);
          this.displayTextElement(this.text);
        } else if (target && elem.id === 'Tab') {
          this.text += '    ';
          this.displayTextElement(this.text);
        } else if (target && elem.id === 'Enter') {
          this.text += '\n';
          this.displayTextElement(this.text);
        } else if (target && elem.id === 'Space') {
          this.text += ' ';
          this.displayTextElement(this.text);
        } else if (target && elem.id === 'CapsLock') {
          this.changeUpDownKeyboard();
        } else if (target && (elem.id === 'ShiftLeft' || elem.id === 'ShiftRight')) {
          this.changeUpDownKeyboard();
        } else if (event.target.textContent === 'Eng') {
          this.changeKeyboardLanguage();
        } else if (event.target.textContent === 'Rus') {
          this.changeKeyboardLanguage();
        }
      });
    });
  }

  mouseUpEvents() {
    document.body.addEventListener('mouseup', (event) => {
      if (event.target.tagName === 'BUTTON') event.target.classList.remove('button_pressed');
      this.keys.forEach((elem) => {
        if (event.target === elem && (elem.id === 'ShiftLeft' || elem.id === 'ShiftRight')) this.changeUpDownKeyboard();
      });
    });
  }

  displayTextElement(value) {
    this.textarea.value = value || '';
    document.querySelector('textarea').value = this.textarea.value;
  }
}

const createElement = (name, clName, child, parent, ...dataAttr) => {
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
  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      } else {
        element.setAttribute(attrName, attrValue);
      }
    });
  }
  return element;
};

const setStorageItem = (name, value) => window.localStorage.setItem(name, value);
const getStorageItem = (name) => window.localStorage.getItem(name);
const addClass = (key, name) => key.classList.add(name);

window.onload = () => {
  const keyboard = new VirtualKeyboard();
  keyboard.displayKeyboard();
  keyboard.keysEvents();
};
