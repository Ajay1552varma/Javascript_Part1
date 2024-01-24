function calculateCarPrice(val1,val2,...num){
    return num;
}

console.log(calculateCarPrice(200,300,400,2000));

const user={
    usrename:"ajay",
    price:99
}

function handleObject(anyobject){
    console.log(`The user name is:${anyobject.usrename} and price is ${anyobject.price}`);
}

handleObject(user);

const myNewArray=[100,200,300,400];

function returnsecondValue(getarray){
    return getarray[2];
}
console.log(returnsecondValue(myNewArray));