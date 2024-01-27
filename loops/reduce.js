const mynums=[1,2,3,4];

const total=mynums.reduce((acc,curval)=>{
    console.log(`acc: ${acc} and curval:${curval}`);
    return acc+curval;
},0)

// comma 0 means accumulator initial value is 0.

// we can use reduce 

console.log(total);