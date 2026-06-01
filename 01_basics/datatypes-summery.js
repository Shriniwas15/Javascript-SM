//Primitive

//7 types  : String ,Number,null,undefined,boolean,symbol,bigint

//Reference types (Non-Primitive) : Object,Array,Function

// console.log(typeof "hello"); // string
// console.log(typeof 123); // number
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object (this is a quirk in JavaScript)
// console.log(typeof Symbol("id")); // symbol
// console.log(typeof 123n); // bigint

// console.log(typeof {name:"Alice"}); // object
// console.log(typeof [1,2,3]); // object (arrays are objects in JavaScript)
// console.log(typeof function(){}); // function



//-------------------------Memory--------------------------------------------------------

//Stack -primitive , Heap - non-primitive (reference types)

//Primitive types are stored directly in the variable,
//  while reference types store a reference to the location in memory where the data is stored.
//  When you assign a primitive value to a variable, it creates a copy of that value.
//  When you assign a reference type to a variable, it creates a reference to the same object in memory.
//  This means that changes to the object through one variable will affect all variables that reference that object.

//////////Example of Primitive type
let myYoutubename = "shridotcom";
let anotherName = myYoutubename; // anotherName is a copy of the value in myYoutubename
console.log(myYoutubename);// Output: shridotcom

myYoutubename = "shridotcom2"; // Changing myYoutubename does not affect anotherName
console.log(myYoutubename); // Output: shridotcom2


let myYoutubename1 = "shridotcom";
let anotherName1 = myYoutubename;
anotherName1 = "shridotcom3"; 
console.log(myYoutubename1); // Output: shridotcom



// --------------------------Example of Reference type--------------------------------------------------------
let userOne={
    email:"abc@example.com",
    upi:"abc@upi"
}
let userTwo = userOne; // userTwo is a reference to the same object in memory as userOne

userTwo.email = "xyz@example.com";
console.log(userOne.email); // Output: xyz@example.com
console.log(userTwo.email); // Output: xyz@example.com

// summery : Primitive types are stored directly in the variable and are immutable,
//   while reference types store a reference to the location in memory where the data is stored and are mutable.
//  Changes to a reference type through one variable will affect all variables that reference that object, 
//  while changes to a primitive type do not affect other variables.
   
//example of immutability of primitive types
let str1 = "Hello";
let str2 = str1;
str2 = "World"; // Changing str2 does not affect str1
console.log(str1); // Output: Hello
console.log(str2); // Output: World

//example of mutability of reference types
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4); // Changing arr2 affects arr1 because they reference the same array in memory
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]

//example of immutability of primitive types
let num1 = 10;
let num2 = num1;
num2 = 20;
console.log(num1); // Output: 10
console.log(num2); // Output: 20

//example of mutability of reference types
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob