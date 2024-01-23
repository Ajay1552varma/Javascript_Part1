//Singleton Objects
const tinderUser=new Object();
tinderUser.id="123"
tinderUser.name="Ajay"
tinderUser.age=25;
console.log(tinderUser);

//Non-Singleton Objects
const regularUser={
    email:"ajay@gmail.com",
    fullname:{
        userfullName:{
            fname:"Ajay",
            lname:"varma"
        }
    }
};
console.log(regularUser.fullname.userfullName);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// Just Use spread operator
const obj3={...obj1,...obj2}
console.log(obj3);

const user=[
    {
        id:1,
        email:"ajay"
    },
    {
        id:1,
        email:"ajay"
    },
    {
        id:1,
        email:"ajay"
    },
    {
        id:1,
        email:"ajay"
    },
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// check if any key is present in the objects or not
console.log(tinderUser.hasOwnProperty('name'));

