// Javascript Execution context
// There are mainly two type of execution context but can say three also

// 1-> Global Execution context
// 2-> Function Execution context
// 3-> Eval Execution context

// {}- Memory creation phase 
// {}- Execution phase


// Refer MDN for Better understanding of Javascript Execution context

let val1=5
let val2=4;

function addnum(num1,num2){
    let total=num1+num2;
    return total;
}
let result1=addnum(val1,val2);
let result2=addnum(2,3);

// call stack.

// All the function will be stored in stack and after execution it will be removed from the stack
// it will work on the basis of LIFO
