let gameResult=document.getElementById("gameResult");
let userInput=document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
function checkGuess(){
    let guessNumber=parseInt(userInput.value);
    if(guessNumber>randomNumber){
        gameResult.textContent="Too High! Try Again.";
        gameResult.style.backgroundColor="#034efc";
    }
    else if(guessNumber<randomNumber){
        gameResult.textContent="Too Low! Try Again.";
        gameResult.style.backgroundColor="#034efc";
    }
     else if(guessNumber==randomNumber){
        gameResult.textContent="Congratulations! You Did It Right..";
        gameResult.style.backgroundColor="#03fc3d";
    }
     else{
        gameResult.textContent="Invalid Input!! Please Enter Correct Number Between 1 and 100";
        gameResult.style.backgroundColor="#fc0b03";
    }
}