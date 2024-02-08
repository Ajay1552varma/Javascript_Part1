// first memory phase will be created in that all the variables will be loaded then assignment will happen
// this is called hoesting
// In this code firstly val is not defiend but it will not through error val will be assigned with 
// undefiend this is called hoiesting.
// The hoiesting will only work in the case of var not in the case of let and const
// In the case of let and const it will through an error which is called Temporal Dead zone.
console.log("The value of variable is",val);
var val=20;
console.log("Value is",val);