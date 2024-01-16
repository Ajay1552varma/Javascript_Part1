// Primitive

// 7 Type: String,Number,boolean,null,undefiend,symbol,BigInt.

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const temp=null;
let userEmail;   // undefiend

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id==anotherId);

const bigNum=747936659832684387535595n;   // put n at last it will become bigInt.
console.log(typeof bigNum);


// Refrence/Non_primtive: Arrays,Objects,Functions

const heros=["ajay","vivek","sashikanth","sandeep"];

let myobj={
    myName:"ajay",
    age:23
}

const myFunction=function(){
    console.log("This is first function");
}



// *********** Memory ************

//Stack(primitive) , Heap(NoN-Primitive)

let username="ajayvarma";
let anotherName=username;
anotherName="sanjaySingh";
console.log(username);
console.log(anotherName);


let userOne={
    email:"ajay@gmail.com",
    upi:"ajay@ybl"
}

let userTwo=userOne;

userTwo.email="user@gmail.com";

console.log(userOne);
console.log(userTwo);


