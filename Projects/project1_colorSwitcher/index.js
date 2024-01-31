const buttons=document.querySelectorAll(".button");
//console.log(buttons);
const body=document.querySelector("body");
buttons.forEach((button)=>{
  // console.log(button);
   button.addEventListener('click',function(e){
    //console.log(e);
    //console.log(e.target);
    let color=e.target.id;
   // console.log(e.target.id);
    switch(color){
        case'gray':
        body.style.backgroundColor="gray";
        break;
        case'pink':
        body.style.backgroundColor="pink";
        break;
        case'blue':
        body.style.backgroundColor="blue";
        break;
        case'red':
        body.style.backgroundColor="red";
        break;
    }
   })
})

