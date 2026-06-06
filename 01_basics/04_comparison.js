// console.log("2">1); 
// console.log(2>1);
// console.log(2>"1")
// console.log(2>"4")

// console.log(undefined=0);  //undefined not allowed 
// console.log(undefined>0);

// // ===   strict check
// console.log("2"===2);


//--reverse string
function reverse(str){
    return str.split('').reverse().join('');
    }
    console.log(reverse("hello")); // olleh
     
// }

// // ======================
// // 2. Palindrome
// // ======================
// function isPalindrome(str){
//   return str === str.split('').reverse().join('');
// }
// console.log("2 Palindrome:", isPalindrome("madam")); // true

// 3. Largest Number
// ======================
function max(arr){
  return Math.max(...arr);
}
console.log("3 Max:", max([1,5,3,9])); // 9


// ======================
// 4. Remove Duplicates
// ======================
function unique(arr){
  return [...new Set(arr)];
}
console.log("4 Unique:", unique([1,2,2,3])); // [1,2,3]


// ======================
// 5. Sum of Array
// ======================
function sum(arr){
  return arr.reduce((a,b)=>a+b,0);
}
console.log("5 Sum:", sum([1,2,3,4])); // 10

// ======================
// 6. Flatten Array
// ======================
function flat(arr){
  return arr.flat(Infinity);
}
console.log("6 Flat:", flat([1,[2,[3]]])); // [1,2,3]

// ======================
// 7. Count Characters
// ======================
function count(str){
  return str.split('').reduce((acc,c)=>{
    acc[c] = (acc[c]||0)+1;
    return acc;
  },{});
}
console.log("7 Count:", count("aab")); // {a:2,b:1}

// ======================
// 8. Debounce
// ======================
function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>fn.apply(this,args), delay);
  }
}
const debounced = debounce(()=>console.log("8 Debounced Call"),1000);
debounced(); debounced(); debounced(); // only one executes


// ======================
// 9. Throttle
// ======================
function throttle(fn, limit){
  let flag = true;
  return function(){
    if(flag){
      fn();
      flag = false;
      setTimeout(()=>flag=true, limit);
    }
  }
}
const throttled = throttle(()=>console.log("9 Throttled Call"),1000);
throttled(); throttled(); throttled();

// ======================
// 10. Deep Copy
// ======================
function deepCopy(obj){
  return JSON.parse(JSON.stringify(obj));
}
const obj1 = {x:1};
const obj2 = deepCopy(obj1);
console.log("10 Deep Copy:", obj2);

// ======================
// 11. Closure
// ======================
function counter(){
  let count = 0;
  return function(){
    return ++count;
  }
}
const c = counter();
console.log("11 Closure:", c(), c()); // 1 2

// ======================
// 12. Memoization
// ======================
function memo(fn){
  let cache = {};
  return function(n){
    if(cache[n]) return cache[n];
    return cache[n] = fn(n);
  }
}
const square = memo(n=>n*n);
console.log("12 Memo:", square(5), square(5)); // cached


// ======================
// 13. Anagram
// ======================
function isAnagram(a,b){
  return a.split('').sort().join('') === b.split('').sort().join('');
}
console.log("13 Anagram:", isAnagram("listen","silent")); // true


// ======================
// 14. Missing Number
// ======================
function missing(arr){
  let n = arr.length+1;
  let sum = n*(n+1)/2;
  return sum - arr.reduce((a,b)=>a+b,0);
}
console.log("14 Missing:", missing([1,2,4,5])); // 3

// ======================
// 15. Capitalize Words
// ======================
function cap(str){
  return str.split(' ')
    .map(w=>w[0].toUpperCase()+w.slice(1))
    .join(' ');
}
console.log("15 Capitalize:", cap("hello world"));

// ======================
// 16. Promise
// ======================
const p = new Promise((res)=>{
  setTimeout(()=>res("16 Promise Done"),1000);
});
p.then(console.log);

// ======================
// 17. Async/Await
// ======================
async function asyncExample(){
  return "17 Async/Await Done";
}
asyncExample().then(console.log);


// ======================
// 18. Event Loop
// ======================
console.log("18 Start");

setTimeout(()=>console.log("18 Timeout"),0);

Promise.resolve().then(()=>console.log("18 Promise"));

console.log("18 End");

// ======================
// 19. Custom Map
// ======================
Array.prototype.myMap = function(cb){
  let res=[];
  for(let i=0;i<this.length;i++){
    res.push(cb(this[i]));
  }
  return res;
}
console.log("19 Custom Map:", [1,2,3].myMap(x=>x*2));

// ======================
// 20. Second Largest
// ======================
function secondLargest(arr){
  return [...new Set(arr)].sort((a,b)=>b-a)[1];
}
console.log("20 Second Largest:", secondLargest([1,5,3,9]));

// ======================
// 21. Group By
// ======================
function groupBy(arr,key){
  return arr.reduce((acc,obj)=>{
    let k = obj[key];
    acc[k] = acc[k] || [];
    acc[k].push(obj);
    return acc;
  },{});
}
console.log("21 Group By:", groupBy(
  [{age:20},{age:20},{age:30}],
  "age"
));

//22. Currying Function
function curry(a){
  return function(b){
    return function(c){
      return "22 ans: " + (a + b + c);
    }
  }
}

console.log(curry(1)(2)(3)); // 6

//23. Polyfill for map()
Array.prototype.myMap = function(callback){
  let result = [];

  for(let i=0; i<this.length; i++){
    result.push(callback(this[i], i, this));
  }

  return result;
}

const arr = [1,2,3];

const output = arr.myMap(x => x * 2);

console.log(("23 ")+output); // [2,4,6]

//24. Polyfill for filter()
Array.prototype.myFilter = function(callback){
  let result = [];

  for(let i=0; i<this.length; i++){
    if(callback(this[i], i, this)){
      result.push(this[i]);
    }
  }

  return result;
}

const nums = [1,2,3,4];

console.log(("24 ") +nums.myFilter(x => x > 2));
// [3,4]

//25. Polyfill for reduce()
Array.prototype.myReduce = function(callback, initial){
  let acc = initial;

  for(let i=0; i<this.length; i++){
    acc = callback(acc, this[i]);
  }

  return acc;
}

const nums1 = [1,2,3];

const sum1 = nums1.myReduce((a,b)=>a+b,0);

console.log(sum1); // 6

//26. Implement Promise.all

function myPromiseAll(promises){

  return new Promise((resolve, reject)=>{

    let results = [];
    let completed = 0;

    promises.forEach((p,index)=>{

      Promise.resolve(p)
      .then(data=>{

        results[index] = data;
        completed++;

        if(completed === promises.length){
          resolve(results);
        }

      })
      .catch(reject);

    });

  });

}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

myPromiseAll([p1,p2])
.then(console.log); // [1,2]

//27. Custom EventEmitter

class EventEmitter{

  constructor(){
    this.events = {};
  }

  on(event, callback){
    if(!this.events[event]){
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  emit(event, data){
    if(this.events[event]){
      this.events[event].forEach(cb => cb(data));
    }
  }

}

const emitter = new EventEmitter();

emitter.on("message", data=>{
  console.log(data);
});

emitter.emit("message","Hello");

//27. Custom EventEmitter
class EventEmitter1{

  constructor(){
    this.events = {};
  }

  on(event, callback){
    if(!this.events[event]){
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  emit(event, data){
    if(this.events[event]){
      this.events[event].forEach(cb => cb(data));
    }
  }

}

const emitter1= new EventEmitter();

emitter1.on("message", data=>{
  console.log(data);
});

emitter1.emit("message","27  "+"Hello");

//28. Deep Clone with Recursion

function deepClone(obj){

  if(obj === null || typeof obj !== "object"){
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for(let key in obj){
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

const obj = {
  a:1,
  b:{c:2}
};

const cloned = deepClone(obj);

console.log(("28 Deep Clone:") + JSON.stringify(cloned));

//29. Call, Apply, Bind

const person = {
  name:"Shriniwas"
};

function greet(city){
  console.log(

    ("29:  ")+
    `Hello ${this.name} from ${city}`
  );
}

greet.call(person,"Pune");

greet.apply(person,["Mumbai"]);

const bindFn = greet.bind(person,"Nagpur");

bindFn();

//30. Output-Based Closure Question

for(var i=0; i<3; i++){

  setTimeout(()=>{
    console.log(("30  ")+i);
  },1000)

}

//31. Fix Closure Problem
for(let i=0; i<3; i++){

  setTimeout(()=>{
    console.log(("31  ")+ i);
  },1000);

}

//32. Implement once() Function

function once(fn){

  let called = false;

  return function(){

    if(!called){
      called = true;
      return fn();
    }

  }

}

const hello = once(()=>{
  console.log(("   ")+"Hello");
});

hello();
hello();

//33. Array Chunking
function chunk(arr,size){

  let result = [];

  for(let i=0; i<arr.length; i+=size){
    result.push(arr.slice(i,i+size));
  }

  return result;
}

console.log(("33    ")+
  chunk([1,2,3,4,5],2)
);

//34. Infinite Currying

function sum(a){

  return function(b){

    if(b){
      return sum(a+b);
    }

    return a;

  }

}

console.log(("34    ")+sum(1)(2)(3)(4)());

//35. Retry API Calls

async function retry(fn, retries){

  try{
    return await fn();
  }
  catch(err){

    if(retries === 0){
      throw err;
    }

    return retry(fn, retries-1);

  }

}//Retries failed API requests automatically.

//36. Implement a Simple Pub/Sub System

class PubSub{

  constructor(){
    this.events = {};
  }

  subscribe(event, callback){
    if(!this.events[event]){
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  publish(event, data){
    if(this.events[event]){
      this.events[event].forEach(cb => cb(data));
    }
  }

}

const pubsub = new PubSub();

pubsub.subscribe("news", data=>{
  console.log(("36   ")+data);
});

pubsub.publish("news","Breaking News!");

// 37   
// Implement a Simple LRU Cache
// LRU (Least Recently Used) Cache evicts the least recently used item when capacity is exceeded.


class LRUCache{

  constructor(capacity){
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key){
    if(!this.cache.has(key)){
      return -1;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value){
    if(this.cache.has(key)){
      this.cache.delete(key);
    }
    else if(this.cache.size === this.capacity){
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

}

const lru = new LRUCache(2);

lru.put(1,1);
lru.put(2,2);
console.log(("37   ")+lru.get(1));
lru.put(3,3);
console.log(("37   ")+lru.get(2));
lru.put(4,4);
console.log(("37   ")+lru.get(3));
console.log(("37   ")+lru.get(4));

//38. Implement a Simple Event Loop
// A simple event loop can be implemented using a queue to manage tasks and a function to process them.

class SimpleEventLoop{

  constructor(){
    this.queue = [];
    this.processing = false;
  }

  enqueue(task){
    this.queue.push(task);
    this.process();
  }

  async process(){
    if(this.processing) return;

    this.processing = true;

    while(this.queue.length > 0){
      const task = this.queue.shift();
      await task();
    }

    this.processing = false;

  }
}

const eventLoop = new SimpleEventLoop();

eventLoop.enqueue(async ()=>{
  console.log(("38   ")+ "Task 1");

  await new Promise(res => setTimeout(res, 1000));
}

);


eventLoop.enqueue(async ()=>{
  console.log(("38   ")+ "Task 2");

  await new Promise(res => setTimeout(res, 500));
}

);

eventLoop.enqueue(async ()=>{
  console.log(("38   ")+ "Task 3");
}
);

//39. Implement a Simple Observable Pattern
// The Observable pattern allows you to create a stream of data that can be observed and reacted to.

class Observable{

  constructor(){
    this.observers = [];
  }

  subscribe(observer){
    this.observers.push(observer);
  }

  notify(data){
    this.observers.forEach(observer => observer(data));
  }

}

const observable = new Observable();

observable.subscribe(data=>{
  console.log(("39   ")+ "Observer 1: " + data);
});

observable.subscribe(data=>{
  console.log(("39   ")+ "Observer 2: " + data);
});

observable
.notify("Hello Observers!");

//40. Implement a Simple State Management System

// A simple state management system can be implemented using a class 
// that holds the state and allows components to subscribe to changes.

class StateManager{

  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }

  subscribe(listener){
    this.listeners.push(listener);
  }

  setState(newState
  ){
    this.state = {...this.state, ...newState};
    this.listeners.forEach(listener => listener(this.state));
  }

}

const stateManager = new StateManager({count:0});

stateManager.subscribe(state=>{
  console.log(("40   ")+ "Count: " + state.count);
});

stateManager.setState({count:1});
stateManager.setState({count:2});

// These questions cover a wide range of JavaScript concepts and can help you prepare for interviews effectively. 
// Make sure to understand the underlying principles and practice coding these solutions to solidify your knowledge.

// Note: The above code snippets are meant for demonstration purposes and may not cover all edge cases or optimizations.

