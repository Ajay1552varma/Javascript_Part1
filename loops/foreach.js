let lag=["java","pyton","cpp","js"];

lag.forEach((item)=>{
    console.log(item);
})

lag.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const mycode=[
    {
        langauge:"javascript",
        exten:"js"
    },
    {
        langauge:"c++",
        exten:"cpp"
    },
    {
        langauge:"python",
        exten:"py"
    },
]

mycode.forEach((item)=>{
    console.log(item.langauge);
})
