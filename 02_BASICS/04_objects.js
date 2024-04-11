// const tinderUser= new Object();//singelton object
const tinderUser={};//non-singelton object

tinderUser.id="123abc";
tinderUser.name="Mrinal";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Mrinal",
            lastname:"Kandwal",
        }
    }
}

// console.log(regularUser.fullname.userFullName)

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

// const obj3={obj1,obj2};//mt use krio
// const obj3=Object.assign({},obj1,obj2)// ye krio
const obj3={...obj1,...obj2}//ye or aasand hai
// console.log(obj3);

const users=[
    {
        id:1,
        email:"mrinal@gmail.com"
    },
    {
        id:1,
        email:"mrinal@gmail.com"
    },
    {
        id:1,
        email:"mrinal@gmail.com"
    }
];

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//keys
// console.log(Object.values(tinderUser));//values
// console.log(Object.entries(tinderUser));//all enteries [[key, values]]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//

const course={
    coursename:"is in hindi",
    price:"999",
    courseInstructor:"hitesh",
}

const {coursename,courseInstructor:instructor,price}=course;

// console.log(instructor);

