// ********* Arrays  **********
// javascript arrays are resizable and mixed means element can be added at any point of time and 
//mix means in one array multiple type of element can we added like bool,number,string.

//** shallow copy** */
// it means if you make copy of array it will share the same refrence means if you change the elements 
// the original arrays also be affected.

//** Deep copy** */
// it means if you copy array it will not share the same refrence means changing in copied array will
// not affect the original array.

const myArray=[0,1,2,3,4,5];
console.log(myArray);

const myHeros=["ajay","sashi","vivek"];
console.log(myHeros);

const myArray2=new Array(1,2,3,4);
console.log(myArray2[2]);


// Array method
const myArray3=[1,2];
myArray3.push(4);
myArray3.push(3);
myArray3.push(7);
myArray3.pop();
myArray3.unshift(0);  // it will add value in front
myArray3.shift()      // it will remove value from first
console.log(myArray3.includes(2)); // it will return bool true false based on if the value exist or not
console.log(myArray3);

const newarr=myArray3.join(); // it will convert array in string seprated by comma
console.log(newarr);

// slice and splice
console.log("*******Slice and Splice*********");
const sliceArr=[1,2,3,4,5];
console.log("A",sliceArr);
console.log(sliceArr.slice(2,4));
console.log(sliceArr); // After slice orginal array is same
console.log(sliceArr.splice(2,4));
console.log(sliceArr); // After splice original array changed or manuplated.

// the diff between slice and splice is, splice change or manuplate the original array