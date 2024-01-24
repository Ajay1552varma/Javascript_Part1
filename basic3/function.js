function myname(){
    console.log("Ajay");
    console.log("Varma");
}
myname()

function addTwoNumber(num1,num2){
    console.log("Just print something");
    return num1+num2;
}
const res=addTwoNumber(4,5);
console.log("Result:",res);



function userLogin(username){
    if(username===undefined){
        console.log("Please enter Username");
        return;
    }
    return `${username} just logged in`;
}
console.log(userLogin("Ajay varma"));