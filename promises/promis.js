/*
In JavaScript, a Promise is an object that will produce a single value some time in the future. If 
the promise is successful, it will produce a resolved value, but if something goes wrong then it will 
produce a reason why the promise failed. The possible outcomes here are similar to that of promises in 
real life.

JavaScript promises can be in one of three possible states. These states indicate the progress of the
 promise. They are:

pending: This is the default state of a defined promise
fulfilled:  This is the state of a successful promise
rejected: This is the state of a failed promise
A promise goes from pending to fulfilled, or from pending to rejected—‘fulfilled’ and ‘rejected’
 indicate the end of a promise.
 */

 const promisone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
 });

 promisone.then(()=>{
    console.log("Promise is consumed");
 }).catch(()=>{
    console.log("Promis not fullfilled");
 })


 // Task two
 const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two complete");
        reject()
    },1000)
 })
 .then(function(){
console.log("asynce task two complete");
 })
 .catch(function(){
    console.log("async task two is not fullfilled");
 })

 // Task three

 const promisThree=new Promise(function(resolve,reject){
   setTimeout(()=>{
      resolve({userName:"Ajay varma",age:23});
   })
 })

 promisThree.then(function(user){
   console.log(user);
 })


 // If user want perticular data from object so By chaning we can get the data

 const promisFour=new Promise((resolve,reject)=>{
   let condition=true;
   setTimeout(function(){
      if(condition){
         resolve({course:"MERN STACK",cost:5000})
      }
      else{
         reject("Ohh: Something is wronge")
      }
   },1000)
 })

 promisFour.then((details)=>{
   console.log(details);
   return details.course;
 })
 .then((courseName)=>{
   console.log(courseName);
 })
 .catch((error)=>{
   console.log(error);
 })
 // finally will always run even if promis is fullfilled or not
 .finally(()=>{
   console.log("The Promis is either resolved or rejected");
 })




 const promisFive=new Promise(function(resolve,reject){
   let condition=true;
   setTimeout(function(){
      if(condition){
         resolve({collage:"LPU",AddFee:50000})
      }
      else{
         reject("Ohh: Something is wrong in promis five")
      }
   },1000)
 })
 
async function consumePromis(){
  try {
   const responce= await promisFive;
   console.log(responce);
  } catch (error) {
   console.log(error);
  }
}

consumePromis();

/*async function getUsers(){
  try {
   const responce=await fetch("https://jsonplaceholder.typicode.com/users");
   // we will not get formatted and accessable data in the responce so we can convert it in to json
   // format and that also take time so we can use await

   let res=await responce.json();
   console.log(res);
  } 
  catch (error) {
      console.log("The Error is:",error);
  }
}

getUsers();
*/

// can fetch using promises as well

fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
   return data.json();
})
.then((responce)=>{
   console.log(responce);
})
.catch((error)=>{
   console.log("The fetch error",error);
})