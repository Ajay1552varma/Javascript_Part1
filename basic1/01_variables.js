const accountId=124453
let accountEmail="ajay@gmail.com"
var accountPassword="12345"
accountCity="lucknow"  // Not prefrable.
let accountState;

// accountId=2 This operation is not allowed
accountEmail="vij@gmail.com"
accountPassword="3334"
accountCity="Bahraich";

// prefred not to use var because of block scope and functional scope.

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);