let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log( typeof myDate);//object;

let myCreatedDate=new Date(2024,1,18,23,3);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//seconds

let newDate=new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());


console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))