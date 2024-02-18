const accountId=1454564;
let accountEmail="Mrinal@123";
var accountPassword="1234"
accountCity="Jaipur"//don't use thes declaration

// accountId=2; (Not allowed to change const values)
// console.log(accountId);
/*
Prefer not to use var
because of the issue in block scope and functional scope
*/

let accountState;//value without declaration have undefined(value)

console.table([accountId,accountEmail,accountPassword,accountCity]);