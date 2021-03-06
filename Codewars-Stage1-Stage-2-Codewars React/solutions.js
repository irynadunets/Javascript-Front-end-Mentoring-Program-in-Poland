//Santa wish list form in ReactJS

const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      wish:'',
      priority:1,
     }
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    console.log(event);
    const target = event.target;
    const value = target.id === "name" || target.id === "wish"? target.value : target.selected;
    const name = target.id;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event){
    send(this.state);
    event.preventDefault();    
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <input type ="text" id="name" name ="name" value={this.state.value} onChange={this.handleChange}/>
       <textarea id ="wish" name ="wish" value={this.state.wish} onChange={this.handleChange}/>
         <select id="priority" name ="priority" value={1} onChange = {this.handleChange}>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
             <option value="5">5</option> 
          </select>
      </form>
    );
  }
};

//United State of React
import React from 'react';

export class States extends React.Component {
  constructor() {
    super();
    this.state =({united:false});
  }
  
  unite = () => this.setState({united:true});
  render() {
    const message =this.state.united;
    return (
      <div className="status">
          {message?"Code for everyone":"Make America code again"}
      </div>
    )
  } 
}

//React Fun #1: Component types and nesting
const React = require('react');
class Greet extends React.Component{
  render(){
    return (
      <div>
      <Hello/>
      <World/>
      </div>
    )
 }

const Hello = () => <h1>Hello</h1>;
const World = () => <h2>World!</h2>;

//Fizz Buzz
function fizzbuzz(n)
{
const numbers = [];
for(let i=1;i<=n;i++){
numbers.push(i);
}
  let fb=numbers.map(function(num) {
  if(num%3===0){
  if(num%5===0){
  return 'FizzBuzz';
  }else{
  return 'Fizz';
  }
  } else if(num%5===0){
  return 'Buzz';
  } else {
  return num;
  }  
})
return fb;
}

// Return an array
function fizzbuzz(n)
{
const numbers = [];
for(let i=1;i<=n;i++){
numbers.push(i);
}
  let fb=numbers.map(function(num) {
  if(num%3===0){
  if(num%5===0){
  return 'FizzBuzz';
  }else{
  return 'Fizz';
  }
  } else if(num%5===0){
  return 'Buzz';
  } else {
  return num;
  }  
})
return fb;
}

//Vowel Count
function getCount(str) {
  var vowelsCount = 0;
  let arr =['a','e','i','o','u'];
  vowelsCount=str.split('').reduce((acc,el)=>{
  if(el==='a'||el==='e'||el==='i'||el==='o'||el==='u'){
  acc=acc+1;
  }
  return acc;
  },0)
  
  return vowelsCount;
}

//Currying functions: multiply all elements in an array
function multiplyAll(arr){
  return function(n){
  return arr.map(el=>el*n)
  }
}


//BetaCss selectors builder
const cssSelectorBuilder = {
  element: function (value) {
      return new CssSelector().element(value);
  },

  id: function (value) {
      return new CssSelector().id(value);
  },

  class: function (value) {
      return new CssSelector().class(value);
  },

  attr: function (value) {
      return new CssSelector().attr(value);
  },

  pseudoClass: function (value) {
      return new CssSelector().pseudoClass(value);
  },

  pseudoElement: function (value) {
      return new CssSelector().pseudoElement(value);
  },

  combine: function (selector1, combinator, selector2) {
      return new CssSelector().combine(selector1, combinator, selector2);
  }
};

function CssSelectorCombined(selector) {
  this.stringify = function() {
      return selector;
  }
}
  
function CssSelector() {
  const tooManyPartsInsideSelectorMsg = 'Element, id and pseudo-element should not occur more then one time inside the selector';
  const wrongOrderMsg = 'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element';
  var _element, _id, _class, _attr, _pseudoClass, _pseudoElement;

  function checkIsNotSetted(values) {
      if (values.some(v => v !== undefined))
          throw new Error(wrongOrderMsg);
  }

  function addElementToArray(arr, elem) {
      if (arr) {
          arr.push(elem);
          return arr;
      }
      return [elem];
  }

  this.element = function (value) {
      if (this._element)
          throw new Error(tooManyPartsInsideSelectorMsg);
      checkIsNotSetted([this._id, this._class, this._attr, this._pseudoClass, this._pseudoElement]);
      this._element = value;
      return this;
  };

  this.id = function (value) {
      if (this._id)
          throw new Error(tooManyPartsInsideSelectorMsg);
      checkIsNotSetted([this._class, this._attr, this._pseudoClass, this._pseudoElement]);
      this._id = value;
      return this;
  };

  this.class = function (value) {
      checkIsNotSetted([this._attr, this._pseudoClass, this._pseudoElement]);
      this._class = addElementToArray(this._class, value);
      return this;
  };

  this.attr = function (value) {
      checkIsNotSetted([this._pseudoClass, this._pseudoElement]);
      this._attr = addElementToArray(this._attr, value);
      return this;
  };

  this.pseudoClass = function (value) {
      checkIsNotSetted([this._pseudoElement]);
      this._pseudoClass = addElementToArray(this._pseudoClass, value);
      return this;
  };

  this.pseudoElement = function (value) {
      if (this._pseudoElement)
          throw new Error(tooManyPartsInsideSelectorMsg);
      this._pseudoElement = value;
      return this;
  };

  this.stringify = function () {
      let result = '';
      if (this._element)
          result += this._element;
      if (this._id)
          result += `#${this._id}`;
      if (this._class)
          result += this._class.map(e => `.${e}`).join('');
      if (this._attr)
          result += this._attr.map(e => `[${e}]`).join('');
      if (this._pseudoClass)
          result += this._pseudoClass.map(e => `:${e}`).join('');
      if (this._pseudoElement)
          result += `::${this._pseudoElement}`;
      return result;
  };

  this.combine = function (selector1, combinator, selector2) {
      return new CssSelectorCombined(`${selector1.stringify()} ${combinator} ${selector2.stringify()}`);
  }

}

//Extract Nested Object Reference
Object.prototype.hash = function(string) {  
    try {
        return eval("obj." + string);
    } catch(e) {
        return undefined;
    }
}

//Functional SQL
var query = function() {

  let select = el => el;    
  this.select = (keySelector) => {    
    if (keySelector) select = keySelector 
    this.select = () => {throw Error('Duplicate SELECT')} 
    return this
  }
  
  let from = [];     
  this.from = (array1, array2) => {  
    if (array2) {
      from = [];
      for (i = 0; i<array1.length; i++) {
        for (j = 0; j <array2.length; j++) {
          from.push([array1[i], array2[j]])
        }
      }
    } else {
      from = array1;
    }
    this.from = () => {throw Error('Duplicate FROM')}
    return this
  }
  
  let where = [];  
  this.where = (...functions) => {
    where.push(el => functions.reduce((total, func) => total || func(el), false))
    return this
  }
  
  let orderBy = () => 0;     
  this.orderBy = (func) => {
    orderBy = func;
    this.orderBy = () => {throw Error('Duplicate ORDERBY')}
    return this;
  }
  
  let groupBy = [];
  this.groupBy = (...keySelectors) => {
    groupBy = keySelectors;
    this.groupBy = () => {throw Error('Duplicate GROUPBY')}
    return this;
  }
  
  let having = [];
  this.having = (...func) => { having = func; return this; }

  function group(result, groupBy){ 
    let groups = [];
    result.forEach(k => {    
    groupBy.map(x => x(k)).reduce((total, index, i) => {
        let currentArray = total.find(([j]) => j === index)
        if (!currentArray) {
          currentArray = [index, []]
          total.push(currentArray)
        }
        if (i == groupBy.map(x => x(k)).length - 1) currentArray[1].push(k)
         return currentArray[1]
      }, groups)
    })
    return groups;
  }

  this.execute = () => {
    var result = where.reduce((total, func) => total.filter(func), from)
    if (groupBy.length) result = group(result, groupBy)    
    return having.reduce((total, func) => total.filter(func), result).map(select).sort(orderBy);
  }

  return this;
};

//Can you get the loop ?
function loop_size(node){
    const list = [];
    while (list.indexOf(node) < 0) {
      list.push(node);
      node = node.getNext();
    }    
    return list.length -   list.indexOf(node);
  }

let loop_size = (node) => {
    let arr = [];    
    while (arr.indexOf(node) < 0) {
      arr.push(node);
      node = node.getNext();
    }    
    return arr.length - arr.indexOf(node);
  }
  
//Tail recursion with trampoline
function thunk(fn) { 
  let args = [...arguments].slice(1, arguments.length);
  return function () { 
    return fn.apply(null, args);
  };
};

function trampoline(thunk) {
  while (typeof thunk === 'function') {
    thunk = thunk();
  }
  return thunk; 
}

function isEven(n) {
  let arg = n;

  function _isEven() {
    console.log();
    return (arg === 0 ? true : isOdd(arg - 1));
  };

  return trampoline(thunk(_isEven, n));
}

function isOdd(n) {
  let arg = n;

  function _isOdd() {
    return (arg === 0 ? false : isEven(arg - 1));
  };

  return trampoline(thunk(_isOdd, n));
}

//Lazy evaluation
class Lazy {
  constructor(array) {
    this.array = [];        
  }  
  add(func) {
    this.array.push(func.bind.apply(func, [this].concat([].slice.call(arguments, 1))));
    return this;
  }  
  invoke(obj) {
   return this.array.reduce(function(obj, func) {
     return func.apply(this, obj);
   }, obj)
 }  
}

//Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
class Cuboid {
  constructor(length, width, height){
  this.length = length;
  this.width = width;
  this.height = height;
}

get surfaceArea() {
   return 2 * (this.length * this.width + this.length * this.height + this.height * this.width);
}

get volume() {
    return this.length * this.width * this.height;
}
}

class Cube extends Cuboid {
  constructor(length, width, height){
  super(length,length,length);
  this.length = length;
  this.width = length;
  this.height = length;
}
}

//Sum of Digits / Digital Root
function digital_root(n) {
   while( n > 9 ){
       n = digital_sum(n);    
    }
    return n;
 } 
function digital_sum(n) {
    let sum = 0;
     while(Math.trunc(n) > 10){
        sum += n % 10;
        n = Math.trunc( n / 10 );
      }
    return sum + n;
}

//Replicate `new`
function nouveau (Constructor, ...args) {
  let obj = Object.create(Constructor.prototype);
  let instance = Constructor.apply(obj, args);
  if ((typeof instance === 'object' || typeof instance === 'function') && instance !== null) {
    return instance;
  }
  return obj;  
}

//Array Helpers
Array.prototype.square = function(){
   let newArray=[];
   this.map( value => newArray.push( value ** 2 ));
   return newArray;
};
Array.prototype.cube = function(){
   let newArray=[];
   this.map( value => newArray.push( value ** 3 ));
   return newArray;
};
Array.prototype.sum = function(){
  return this.reduce((sum,  value) => sum +  value, 0)
};

Array.prototype.average = function() {
  return this.sum() / this.length
}

Array.prototype.even = function() {
  return this.filter( value =>  value%2 === 0);
}

Array.prototype.odd = function() {
  return this.filter( value =>  value%2 !== 0);
}

//Calculating with Functions
const zero = (operation) => !operation ? 0 : operation(0);
const one = (operation) => !operation ? 1 : operation(1);
const two = (operation) => !operation ? 2 : operation(2);
const three = (operation) => !operation ? 3 : operation(3);
const four = (operation) => !operation ? 4 : operation(4);
const five = (operation) => !operation ? 5 : operation(5);
const six = (operation) => !operation ? 6 : operation(6);
const seven = (operation) => !operation ? 7 : operation(7);
const eight = (operation) => !operation ? 8 : operation(8);
const nine = (operation) => !operation ? 9 : operation(9);

const plus = (number1) => (number2) => number2 + number1;
const minus = (number1) => (number2) => number2 - number1;
const times = (number1) => (number2) => number2 * number1;
const dividedBy = (number1) => (number2) => parseInt(number2 / number1);

//I Spy
function spyOn (func) {  
  let count=0;
  let arg=[];
  let val;
  let vals=[];
  let spy = (...args) => {
      count++;
      arg.push(...args);
      val = func.apply(this.args);
      vals.push(val);
      return val;
  }
  spy.callCount = () => count;  
  spy.wasCalledWith = (val) => arg.indexOf(val) === -1 ? false : true;  
  spy.returned = (val) =>  vals.indexOf(val)===-1 ? false : true ;
  return spy;
}

//Stringing me along
let createMessage = (word) => x => x ? createMessage(word + ' ' + x ) : word ;

//Function composition
const compose = (...functions) => (...arguments) => functions.reduceRight((accumulator, func) => func(...[accumulator, ...arguments.slice(1)]), arguments[0]);

//Function Composition
const compose = (...functions) => (...arguments) => functions.reduceRight((accumulator, func) => func(...[accumulator, ...arguments.slice(1)]), arguments[0]);

//Function Cache
function cache(func) {
  let storage = {};
  return function(){
        let keyValue = JSON.stringify(arguments);
        if(storage.hasOwnProperty(keyValue)) return storage[keyValue];            
        storage[keyValue] = func.apply(this, arguments);          
        return storage[keyValue] ;    
      }
  }

//A Chain adding function
function add(n){  
  let next = x => add(x + n); 
  next.valueOf = () => n; 
  return next;
}

//Using closures to share class state
// Let's make a Cat constructor!
var Cat = (function () {

 const cats = new Set();
 
 function Cat (name, weight) {
    this.name = name;
    this.weight = weight;
    if (name && weight) {
      cats.add(this);
    }  
    
 Cat.averageWeight = () => {
      let total = 0;
      for (let cat of cats) {
        total += cat.weight;
      }
      return total / cats.size;
    };
    
  Object.defineProperty(this, "weight", {
      get: function() { return weight; },
      set: function(x) { weight = x; },
      configurable : true,
    });
    
  if (!weight) throw(new Error('error'));
    
  }
  
  return Cat; 
  
}());

//Can you keep a secret?
function createSecretHolder(secret) { 
    let sec = secret;
    return {
        getSecret: function() {
            return sec;
        },

        setSecret: function(secret) {
            sec = secret;
        }
    }    
}

//Base Conversion
function convert(input, source, target) {
  let converted = '';
  let sourceArray = input.split('').reverse().reduce( (accumulator, currentValue, currentIndex) => {
    let tr = (source.length ** currentIndex) * source.indexOf(currentValue);
    return accumulator + tr;
  }, 0);
  if (sourceArray === 0) {  
     return target[0];  
  } else {
  while (sourceArray > 0) {
    let i = sourceArray % target.length;
    let k = sourceArray / target.length;
    converted += target[i]; sourceArray = Math.floor(k);
  }
  }
  return converted.split('').reverse().join('');
}

//Sequence generator
function sequence(n, pattern) {
  return typeof pattern === 'function'? Array(n).fill().map(pattern): Array(n).fill(pattern);
}
6 months agoRefactor
function sequence(n, pattern) {
let arr;
typeof pattern === 'function'? arr=Array(n).fill().map(pattern):arr= Array(n).fill(pattern);
  return arr;
}

//Cross Product of Vectors
function crossProduct (vector1, vector2) {  
  let crossProductVector = [];
  if(!Array.isArray(vector1) || vector1.length < 3 || !vector1.every(x => !Number.isNaN(x))||!Array.isArray(vector2) || vector2.length < 3 || !vector2.every(x => !Number.isNaN(x))){
     throw 'Arguments are not 3D vectors!';  
   } else {    
    crossProductVector.push(vector1[1]*vector2[2]-vector1[2]*vector2[1]);
    crossProductVector.push(vector1[2]*vector2[0]-vector1[0]*vector2[2]);
    crossProductVector.push(vector1[0]*vector2[1]-vector1[1]*vector2[0]);
  return crossProductVector;
  } 
}
6 months agoRefactor
function crossProduct (vector1, vector2) {
  let pr = true;
  let vector = [];
  if(!Array.isArray(vector1) || vector1.length < 3 || !vector1.every(x => !Number.isNaN(x))||!Array.isArray(vector2) || vector2.length < 3 || !vector2.every(x => !Number.isNaN(x))){
     pr=false;
  }
 
  if(pr){   
    vector.push(vector1[1]*vector2[2]-vector1[2]*vector2[1]);
    vector.push(vector1[2]*vector2[0]-vector1[0]*vector2[2]);
    vector.push(vector1[0]*vector2[1]-vector1[1]*vector2[0]);
  return vector;
} else {
throw 'Arguments are not 3D vectors!';
}
}

//Prefill an Array
function prefill(n, v) {
if(n === 0 || n === '0') return [];
  if(typeof n === 'boolean'||!isFinite(n)||
  !Number.isInteger(Number(n))||Number(n) < 0){    
    let TypeError = new Error;
    TypeError.name = "TypeError";
    TypeError.message = n + " is invalid";
    throw TypeError
  };
  return new Array(n).fill(v); 
}

//Implement Array.prototype.filter()
Array.prototype.filter = function(callback){
  let array = [];   
  this.forEach(i => {
    if(callback(i)) {
       array.push(i);
    }
     });
  return array;
  }

//Remove First and Last Character Part Two
function array(arr){
var ar=arr.split(',');
console.log(ar);
return (ar.length<3)?null:ar.slice(1,-1).join(' ');
}

//Word Count
function countWords(str) {
var matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}

//Partition On
// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
var tr=[];
var fl=[];
items.map(item => pred(item)?tr.push(item):fl.push(item));
items.splice(0,items.length);
fl.map(item =>items.push(item)); 
tr.map(item =>items.push(item));
return fl.length;
}

//Count characters in your string
function count (string) {  
  return string.split('').reduce((accumulator, character) => {
    accumulator[character] ? accumulator[character]++ : accumulator[character] = 1;
    return accumulator;
  }, {});
   return {};
}

//Square Every Digit
function squareDigits(num){
  return parseInt(num.toString().split('').map(digit=>parseInt(digit)**2).join(''));  
}


//Shortest Word
function findShort(s){
   return s.split(' ').reduce((shortestWord, currentValue) => currentValue.length < shortestWord.length ? currentValue :shortestWord).length; 
}

//Is a number prime?
JavaScript:

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++)
    if(num % i === 0) return false;
  return num > 1;
}

//Factorial
function factorial(n)
{  
  if(n<0||n>12) throw new IllegalArgumentException();
  return (n===0) ? 1 : factorial(n-1) * n;
}

//Greatest common divisor
function mygcd(x,y){
  return y==0 ? x : mygcd(y, x % y);
}

//Fun with ES6 Classes #2 - Animals and Inheritance
class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.status = status;
    this.species = 'shark';
  }
}

class Cat extends Animal {
  constructor(name, age, status, legs, species) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.status = status;
    this.species = 'cat';
  }
   introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master, legs, species) {
    super();
    this.name = name;
    this.age = age;
    this.master = master;
    this.status = status;
    this.legs = 4;
    this.species = "dog";
  }
   introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

//new with apply
function construct(Class, ...args) {
   return new Class(...args);
}

//SantaClausable Interface
function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(method) {
    return typeof obj[method] == 'function';
  });
}

//BetaA function within a function
// return a function that returns n
function always (n) {
return function(){
return n;
};
}

//Closures and Scopes
function createFunctions(n) {
  var callbacks = [];
  for (var i=0; i<n; i++) {
    callbacks.push(funcCallback(i));
  }  
  return callbacks;
}

function funcCallback(i){
return function(){
return i;
};
}

//Get the Middle Character
function getMiddle(s)
{
var p = Math.trunc(s.length/2);
return s.length%2===0?s.substring(p-1, p+1):s.substring(p, p+1);
}

//Transportation on vacation
function rentalCarCost(d) {
var total=d*40;  
  d>2?d<7?total=total-20:total=total-50:total=total;  
  return total;
}

//Printing Array elements with Comma delimiters
function printArray(array){
  return array.toString().split('').join('');
}

//Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  switch(operation) {
  case '+':
    return value1+value2;
    break;
  case '-':
    return value1-value2;
    break;
    case '*':
    return value1*value2;
    break;
     case '/':
    return value1/value2;
    break;
  default:
    break;
}
}

//Opposite number
function opposite(number) {
  return -number;
}

//Birthday I - Cake
function cake(x, y){
  let z=y.split('').reduce((acc,el,index)=>acc+(index%2===0?el.charCodeAt(0):el.charCodeAt(0)-96),0);
  return z>x*0.7?'Fire!':'That was close!'
}

//Regexp Basics - is it a letter?
String.prototype.isLetter = function() {
   return /^[a-zA-Z]$/.test(this);
}

//Regexp Basics - is it a vowel?
String.prototype.vowel = function() {
  return /^[aeiouAEIOU]$/.test(this);
};

//Easy mathematical callback
function processArray(arr, callback) {
    return arr.map(el=>callback(el));
}

//Find The Duplicated Number in a Consecutive Unsorted List
function findDup( arr ){
 return   arr.reduce((acc,currentValue,index, array) => { if(array.indexOf(currentValue)!=index && !acc.includes(currentValue)) acc.push(currentValue); return acc; }, [])[0]; 

}

//Anagram Detection
// write the function isAnagram
var isAnagram = function(test, original) {
return test.toLowerCase().split('').sort().join('')===original.toLowerCase().split('').sort().join('');
};

//Simple validation of a username with regex
function validateUsr(username) {
  res =  /^[a-z0-9_]{4,16}$/.test(username) 
  return res
}

//Sum of positive
function positiveSum(arr) {
  return arr.reduce((acc,val)=>{
  return val<0?acc:acc+val;
  },0);  
}

//Remove duplicates from list
function distinct(a) {

  return a.filter((v,i)=>a.indexOf(v)===i);
}

//Century From Year
function century(year) {
  // Finish this :)
    if(year%100===0){
    return year/100 ;
    }else{
    return parseInt(year/100)+1;
    }
}

//Even or Odd
function even_or_odd(number) {
 return (number%2===0)?'Even':'Odd';
}

//Palindrome Strings
function isPalindrome(line) {
  return line===line.split('').reverse().join('');
}

//Remove First and Last Character
function removeChar(str){ 
return str.slice(1,str.length-1);
};


//Reversed Strings
function solution(str){
  return str.split('').reverse().join('');
}

//Multiply
function multiply(a, b){
 return a * b
}
