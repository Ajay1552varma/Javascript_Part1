const bolActors=["ajay","sunny","salman","vijay"];
const bolActrees=["puja","kat","mudhu","tamnna"];
//push

//bolActors.push(bolActrees)
//console.log(bolActors);

//concat

// const actors=bolActors.concat(bolActrees);
// console.log(actors);

// We can use spread operator instead of concat because in case of concat we can only merge 2 arrays but
//in case of spread operator we can merge n number of arrays

const allheros=[...bolActors,...bolActrees];
console.log(allheros);
// flatten Array concept
const anotherArray=[1,2,3,4,[5,6,7],8,[5,6,8,[9,2,5]]];
const ussableArray=anotherArray.flat(Infinity); // we can exactly provide the number that how much we need to flat the array.
let myname="Ajay";
console.log(Array.isArray(myname));
console.log("Fllaten Array",ussableArray);
