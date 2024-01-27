// for of loop

const arr=[1,2,3,4,5];

for (const num of arr) {
   // console.log(num);
}

const greeting="Hello world";

for (const greet of greeting) {
    console.log(`All character is ${greet}`);
}

// map is object which hold in key value pair, no duplicate value

const map=new Map();
map.set("IN","India")
map.set("USA","United state of america")
map.set("fr","france")

console.log(map);

for (const [key,value] of map) {
    console.log(key,'->',value);
}

// we can't itrate object through for of loop

const myobj={
    username:"ajay",
    age:20,
    city:"bah"
}

// we can use forin loop to itrate object

for (const key in myobj) {
    // to print key value both we can use like
   console.log(`${key} shorcut is-> ${myobj[key]}`);
}

let array=["js","ruby","java"]

for (const ar in array) {
    console.log(array[ar]);
}
