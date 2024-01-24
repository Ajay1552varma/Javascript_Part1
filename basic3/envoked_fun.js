//Imediatly invoked function Expression (IIFE)-> To remove global scope pollution we use IIFE.

(function chai(){
    console.log(`DB Connected`);
}
)();

(()=>{
    console.log("This is DB Two");
})()
