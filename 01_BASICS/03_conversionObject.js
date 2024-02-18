let score=null;
console.log(typeof score);

let valueNumber=Number(score);

console.log(typeof valueNumber);
console.log(valueNumber);//when null is coverted to number
//when undefined is converted into number gives NaN
//"33"=>33
//"33abc"=>NaN
//null=>0
//true=>1
//false=>0
//undefined=>NaN

let isLoggedIn=1;

let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);