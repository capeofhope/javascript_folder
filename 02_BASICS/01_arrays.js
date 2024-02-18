//array

const myArr=[0,1,2,3,4,5,5];
const myHeroes=["iron-man","ant-man","hawk-eye"];

// console.log(myArr[1]);

//Array methods;

// console.log(myArr);
myArr.push(6);
// console.log(myArr);
myArr.pop();
// console.log(myArr);

// myArr.unshift(5);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(5));//true
// console.log(myArr.indexOf(5));
// 
const newArr=myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);//string

//slice,splice
console.log("A ",myArr);

const m=myArr.slice(1,3);//no change in new array
console.log(m);
console.log("B :",myArr);

const m2=myArr.splice(1,3);//change the original array
console.log(m2);
console.log("C :",myArr);