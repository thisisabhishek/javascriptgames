/*
    Number Guessing Game
    Computer = 1 to 10
    User has to guess the number
    The user gets 3 chances to do so
*/
let startGame = confirm("Number guessing Game! Let's go!!")

// random number computer
let correctNumber = Math.ceil(Math.random()*10);

let gameCounter = 0

while(gameCounter < 3) {

    let guessedNumber = prompt("Please guess a number...");

    // game logic
    if(correctNumber == guessedNumber) {
        alert("Wohoo! You guessed it right.");
        break;
    }
    else {
        alert("No! That's not the right number");
        gameCounter++;
    }

}

if(gameCounter == 3) {
    alert("Sorry! You only get 3 chances");
}

let replayGame = confirm("Do you want to play again?")
if(replayGame) {
    location.reload();
}
else {
    alert("Ok! Bye!")
}
