const name="Ajay"
const num=23

//console.log(name+num);

// prefer to Use Backtics

console.log(`Hello my name is ${name} and the number is ${num}`);

// New way to declare String

let strName=String("Ajay Varma");


console.log(strName[0]);
console.log(strName.length);
console.log(strName.toUpperCase());  // It will not change the original String
console.log(strName.charAt(2));
console.log(strName.indexOf('y'));

const newString=strName.substring(0,6);
console.log(newString);

let sliced=newString.slice(2,4);
console.log(sliced);

//  console.log(strName.trim()); it is used to remove whitespace from start and end; 

const url="https://ajayweb.com/ajay%20varma";
console.log(url.replace('%20','-'));

console.log(url.includes('ajay'))

const strSplit="Hello my name is ajay varma";
const word=strSplit.split(' ');
console.log(word);
