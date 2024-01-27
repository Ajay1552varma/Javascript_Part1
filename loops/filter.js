// for each don't return value
let lag=["java","pyton","cpp","js"];

const val=lag.forEach((item)=>{
    //console.log(item);
    return item;
})
//console.log(val);  // it will show undifiend 

let arr=[1,2,3,4,5,6,7];

let newarr=arr.filter((num)=>{
    return num>5;
})
console.log(newarr);