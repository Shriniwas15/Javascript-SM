const name="shriniwas";
const repoCount=20

//console.log( name + epoCount +"value")///this is old method ..not professional


//use backticks for modern way

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);//string interpolation method 

const gameName = new String('shri-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   shri    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.onlinegdb.com/login?next=%2Fmyfiles"

console.log(url.replace('%2', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));