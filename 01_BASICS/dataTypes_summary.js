//how is the data stored and access from the memory 
//primiitive (call by value) data type

//7types :String,Number,Boolean,null,undefined,Symbol,BigInt
 
const score=300
const c=100.3

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol("1232");
const id2=Symbol("1232");
// console.log(id==id2);//false;



//Non-primitive(reference-type)

//types: Arrays,Objects,functions 
const heroes=["shaktiman","naagraj","doga"];
let myObj={
    name:"Mrinal",
    age:19
}
const myfunction=()=>{
    console.log("HEllo World")
}
// console.log(typeof myfunction);


//************************************************//

//Stack(Primitive),Heap(Non-Primitive)

let myName="Mrinal"//go in stack
let anotherName=myName;
anotherName="chaincode";

console.log(anotherName);
console.log(myName);

let userOne={
    email:"mrinal@gmail.com",
    upi:"user@sbi"
}

let userTwo=userOne;
userTwo.email="mri@gmail.com";//changes the intial object(passed by reference)

console.log(userOne);