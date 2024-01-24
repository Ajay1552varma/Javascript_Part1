// const user={
//     username:"Ajay",
//     price:999,
//     welcome:function(){
//         console.log(`${this.username} Wellcome to website`);
//         console.log(this);
//     }
// }

// user.welcome()
// user.username="Ajay Varma"
// user.welcome()

// function chai(){
//     console.log(this);
// }
// chai()


// if we are using curly braces then we need to write return keyword or if we are using paranthisis
//no need to write because only one line is there.

//const addTWo=(num1,num2)=>(num1+num2)

const addTWo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTWo(7,8));