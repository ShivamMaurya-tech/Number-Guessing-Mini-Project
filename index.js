

let randomnumber=parseInt(Math.random()*100+1);
// console.log(randomnumber);
let submit =document.querySelector('#submited');
let userinput=document.querySelector('#inputbox');
let guessslot=document.querySelector('.guesses');
let guessremain=document.querySelector('.lastresult');
let loworhi=document.querySelector('.loworhigh');
let startover=document.querySelector('.resultparas');
// to create element for pressing button to restart the game
let P=document.createElement('p');
let prevguess=[];
let numguess=1;

let playgame=true; //always play game because of boolean true
if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();//if the  event does not get explicitly handled, its default action should not be taken as it normally would be.
    //click event listner use to select specific part only submit
const guess=userinput.value;
// console.log(guess);
validategame(guess);

}) 
}
function validategame(guess){
    if(isNaN(guess)){
        alert ("enter the valid number");
    }
    else if(guess<1){
        alert ("please enter the number greater than 1");
    }
    else if(guess>100){
        alert ("please enter the number less than 100");
    }
    else{
        prevguess.push(guess);
        if(numguess===11){
            displayguess(guess);
            displayMessage(`Game Over ,Random Number was ${randomnumber}`);
endgame()
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }

}

function checkguess(guess){
    if(guess==randomnumber){
        displayMessage("You Guessed it right");
        endgame();
    
    }
    else if(guess<randomnumber){
        displayMessage("Number is Too Low");

    }
    else if(guess>randomnumber){
        displayMessage("Number is too High");
    }
    
}
function displayguess(guess){
    userinput.value='';
    guessslot.innerHTML+=`${guess},`;
    numguess++;
    guessremain.innerHTML=`${11-numguess}`;

}
function displayMessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`;

}
function endgame(){
    userinput.value='';
    userinput.setAttribute('disabled' , '');
    P.classList.add('button');
    P.innerHTML='<h2 id ="newgame"  align="center"> Start New Game </h2>';
startover.appendChild(P);
playgame=false;
newgame();

}
function newgame(){
    const newgamebutton=document.querySelector('#newgame');
    newgamebutton.addEventListener('click',function(e){
        randomnumber=parseInt(Math.random()*100+1);
        prevguess=[];
        numguess=1;
        loworhi.innerHTML=" ";
        guessslot.innerHTML=" ";
        guessremain.innerHTML=`${11-numguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(P);
        playgame(true);
    })

}
