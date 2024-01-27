let arr=[1,2,3,4,5,6];

const newnum=arr.map((num)=>{
    return num+10;
})
console.log(newnum);

let array=[1,2,3,4,5,6];

const newarray=array.map((num)=>{
    return num*10;
})
.map((num)=>{
    return num+5;
})
console.log(newarray);