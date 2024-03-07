//singleton

//object literals
const mySym=Symbol("key1");

const JUser={
    name:"Mrinal",//key:value
    age:19,
    [mySym]:"mykey1",
    location:"Prayagraj",
    email:"mrinal@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
};

// console.log(JUser.email);//not preferred
// console.log(JUser["email"]);//prefer
// console.log(JUser[mySym]);

JUser["email"]="mrinalk@123";//changing value
// Object.freeze(JUser);//no further changes can be seen 
// console.log(JUser["email"]);
// console.log(JUser);

JUser.greeting=function(){
    console.log("Hello user.")
};
JUser.greetingTwo=()=>{
    console.log(`Hello user,${this.name}`);
}
// console.log(JUser.greeting());
console.log(JUser.greetingTwo());