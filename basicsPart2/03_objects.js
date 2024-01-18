const mykey=Symbol("");
const jsUser={
    name:"ajay",
    [mykey]:"trying symbool",
    age:23,
    location:"banglore",
    gmail:"ajay@gmail.com",
    isLoggedIn:"false",
    lastLoggedIn:["monday","tuesday"]
}
jsUser.greeting=function(){
    console.log(`Hello my name is ${this.name}`);
}
console.log(jsUser.gmail);
console.log(jsUser["gmail"]);
console.log(typeof mykey);
console.log(jsUser);
console.log(jsUser.greeting())