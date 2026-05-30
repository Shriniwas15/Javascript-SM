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