function myFunction(){
    console.log("I was clicked");
}
function mouseover(){
    console.log("mouse over");
}
function keypress(){
    console.log("Key was pressed");
}
function keydown(){
    console.log("key up pressed");
}
function keyup(){
    console.log("Key down pressed");
}

const box3=document.getElementById('box-3');
box3.addEventListener('click',function(e){
    console.log("Clicked through Event Listeners");
    console.log("Event Object", e.clientX,e.clientY);
})
// Event Bubbling
/*
In event Bubbling the Innermost element event handled first and then the outer .
*/
// Event Capturing the Outermost element event trigger first and then the Inner.

const container=document.getElementById('container');
container.addEventListener('click',function(){
    console.log("The parent is clicked");
})

// if you add parameter as true the behaviour will reverse like bubbling to capturing and vice versa.
