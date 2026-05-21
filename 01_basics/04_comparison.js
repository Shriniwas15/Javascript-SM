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





