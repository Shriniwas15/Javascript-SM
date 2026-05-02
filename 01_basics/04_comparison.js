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

