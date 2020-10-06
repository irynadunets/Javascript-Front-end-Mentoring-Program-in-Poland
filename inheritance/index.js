function Builder (value) {
  this.value = value;
  return this;
}

Builder.prototype.plus = function (...n) {    
  this.value = this.value + Math.sum(...n) ;    
  return this;
}

Builder.prototype.get = function () {
  return this.value;
}

Math.sum = (...n) => Array.prototype.reduce.call(n,(n,m) => n+m);

class IntBuilder extends Builder {
  constructor(value) {
    value = typeof value === 'number' || value instanceof Number ? value : 0;
    super(value);
  }

  minus(...n) {
    this.value = this.value - Math.sum(...n) ;
    return this;
  }

  multiply(n)  {
    this.value = this.value * n;
    return this;
  }

  divide(n) {
      this.value = this.value / n;
      return this;
  }

  mod(n){
    this.value = this.value % n;
    return this;
  }

  static random(from, to)  {
    return Math.floor(Math.random() * (to - from)) + from;
  }
}

function StringBuilder(value) { 
  Builder.call(this, value); 
  this.value = value ? value.toString() : '';
  return this;
}

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minus = function (n) {
  this.value = this.value.slice(0, -n);
  return this;
}

StringBuilder.prototype.multiply = function (n) {
  this.value = this.value.repeat(n);
  return this;
}

StringBuilder.prototype.divide = function (n) {
  this.value = this.value.slice(0,n);
  return this;
}

StringBuilder.prototype.remove = function (value) {
  var str = this.value;
  var n = str.search(value);
  while (str.search(value) > -1) {
     n = str.search(value);
     str = str.substring(0, n) + str.substring(n + value.length, str.length);
  }
  this.value = str;
  return this;
}

StringBuilder.prototype.sub = function (from, n) {
  this.value = this.value.substr(from, n);
  return this;
}

IntBuilder.random(10, 100);

const intBuilder = new IntBuilder(10);
intBuilder
  .plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .get();
  
const strBuilder = new StringBuilder('Hello');
strBuilder
  .plus(' all', '!')
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove('l')
  .sub(1,1)
  .get();

