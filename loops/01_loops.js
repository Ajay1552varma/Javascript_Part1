// loops

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);  
}

// Break and continue

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log("Executing continue statment");
        continue;
    }
    if(element==8){
        console.log("break statment executed");
        break;
    }
    console.log(element);  
}