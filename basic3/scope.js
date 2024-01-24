// let a=10;
// const b=20;
// var c=30;
// console.log(a,b,c);
// if(true){
//     var c=200;
//     let a=40;
//     let d=100;
//     const w=23;
// }
// console.log(a);
//console.log(d);
//console.log(w);

// Nested scope


function one(){
    let username="Ajay";
    function two(){
        let website="youtube";
        console.log(username);
    }
    // can not access outside of the function
    //console.log(website);
    two();
}
one();

console.log(addone(3));
function addone(num){
    return num+1;
}

// If we are making function like this then before creating fun we can't access

console.log(addtwo(3));
const addtwo=function(num){
    return num+2;
}