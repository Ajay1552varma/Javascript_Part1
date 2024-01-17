let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate=new Date(2024,1,17);
console.log(myCreatedDate);

console.log(myCreatedDate.toDateString());

console.log(myDate.getTime());
console.log(Math.floor(myDate.getTime()/1000));
console.log(myDate.getDay());
console.log(myDate.getMonth());