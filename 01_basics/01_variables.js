 const accountId = 144565
 let accountEmail = "Shriniwas@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2   not allowed

accountEmail = "Shri@gmail.com"
accountPassword = "21233334"
accountCity = "pune"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

 /*Prefer not to use var
 because of issue in block scope and functional scope*/