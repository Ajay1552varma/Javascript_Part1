let form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   const result=document.querySelector('#result');
    result.innerHTML="";
   if(height===' ' || height<0 || isNaN(height)){
     result.innerHTML=`Please Enter Valid Height:${height}`;
   }
   else if(weight===' ' || weight<0 || isNaN(weight)){
    result.innerHTML=`Please Enter Valid weight:${weight}`;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    // Show results
    result.innerHTML=`<span>${bmi}</span>`
    const under=document.querySelector('#under');
    if(bmi<18.5){
        under.innerHTML=`you are under weight According to BMI ${bmi}`;
    }
    else if(bmi>=18.5 && bmi<24.9){
        under.innerHTML=`Your weight is normal According to BMI ${bmi}`
    }
    else if(bmi>25 && bmi<29.9){
        under.innerHTML=`You are over weight According to BMI ${bmi}`;
    }
  }
})