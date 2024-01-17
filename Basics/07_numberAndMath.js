const balance =new Number(100);
console.log(balance);

//****** Maths ***** */

// console.log(Math);
// console.log(Math.abs(-3))

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,3,2,6,7));
// console.log(Math.max(4,3,2,6,7));

console.log(Math.random());   // It will genrate random value between 0 to 1

let ludo=Math.floor((Math.random()*6)+1);
console.log(ludo);

// If i want value between 10 to 20 then the program will be
let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);