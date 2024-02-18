// console.log("hello" + " world");

const name="Mrinal";
const age=19;

// console.log(name+ age);

console.log(`My name is ${name}. My age is ${age}.`)//String interpolation

const gameName= new String('Mrinal');

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString=gameName.substring(0,4);//not use negative index
console.log(newString);

const anotherString=gameName.slice(-5,5);//use ngative indexing
console.log(anotherString);

const StringOne="     Mrinal  ";
console.log(StringOne);
console.log(StringOne.trim());

const url="https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=12"
console.log(url.replace("youtube","github"));
console.log(url.includes('youtube'));
console.log(url.split('/'));