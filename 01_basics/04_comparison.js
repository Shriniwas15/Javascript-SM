console.log("2">1); 
console.log(2>1);
console.log(2>"1")
console.log(2>"4")

// console.log(undefined=0);  //undefined not allowed 
// console.log(undefined>0);

// ===   strict check
console.log("2"===2);


//--reverse string
function reverse(str){
    return str.split('').reverse().join('');
    }
    console.log(reverse("hello"); // olleh
     
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