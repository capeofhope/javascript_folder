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
console.log(id==id2);//false;



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
console.log(typeof myfunction);