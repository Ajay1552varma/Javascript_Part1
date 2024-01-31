let randomnumber=(parseInt(Math.random()*10+1));
//console.log(randomnumber);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaning=document.querySelector('.prevResult');
const loworhi=document.querySelector('.loworhi');
const startOver=document.querySelector('.resultField');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;


if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess+" "+randomnumber);
    validGuess(guess);
  })
}

function validGuess(guess){
  // It will just Validate the guesses weather the is in between 1 to 100 or not
  if(isNaN(guess)){
    alert("enter a valid number");
  }
  else if(guess<1){
    alert("Enter number greater then 1");
  }
  else if(guess>11){
    alert("Enter number less then 10");
  }
  else{
    prevGuess.push(guess);
    if(numGuess===6){
      displayGuess(guess);
      displayMessage(`GameOver random number was ${randomnumber}`);
      endGame()
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  // it will check if the guess is correct if it is correct means you won the match
  if(guess===randomnumber){
    
    displayMessage(`You Gussed it right`);
  }
  else if(guess<randomnumber){
    displayMessage(`The Number is too low`)
  }
  else if(guess>randomnumber){
    displayMessage(`The Number is too high`);
  }
}

function displayGuess(guess){
//it will clean the value and update the array and it will reduce the chance 
  userInput.value='';
  guessSlot.innerHTML+=`${guess}:`;
  numGuess++;
  remaning.innerHTML=`${6-numGuess}`;
}

function displayMessage(message){
  loworhi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame(){
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
  let randomnumber=(parseInt(Math.random()*10+1));
  prevGuess=[];
  numGuess=1;
  guessSlot.innerHTML='';
  remaning.innerHTML=`${6-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame=true;
  })
}



