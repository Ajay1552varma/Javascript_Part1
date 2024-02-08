var variable=10;
(()=>{
    console.log(variable);
    variable=20;
    console.log(variable);
})(); //iife imediatly invocked function
console.log(variable);
variable=30