// Rock, Paper & Scissors
let confirmation = confirm("Start the Game\nRock, Paper & Scissors!");
if(confirmation) {
    /*
        - input from the user - rock, paper or scissors
        - we generate a random value from rock, paper or scissors for the computer
        - and then we do the matching 
        - If U rock 
            - C rock = tie
            - C paper = C
            - C scissors = U
        - If U paper 
            - C rock = U
            - C paper = tie
            - C scissors = C
        - If U scissors 
            - C rock = C
            - C paper = U
            - C scissors = tie
    */
    let userInput = prompt("Please provide your input...")
    if(userInput == "rock" || userInput == "paper" || userInput == "scissors") {

        // Randomly generating the computer input
        let randomChoice = Math.ceil(Math.random()*3)
        let computerInput = (randomChoice == 1)? "rock"
                            : (randomChoice == 2)? "paper"
                            : "scissors"

        let result = (userInput == "rock" && computerInput == "rock") ? "Tie"
                    :(userInput == "rock" && computerInput == "paper") ? "Computer wins"
                    :(userInput == "rock" && computerInput == "scissors") ? "User wins"
                    :(userInput == "paper" && computerInput == "rock") ? "User wins"
                    :(userInput == "paper" && computerInput == "paper") ? "Tie"
                    :(userInput == "paper" && computerInput == "scissors") ? "Computer wins"
                    :(userInput == "scissors" && computerInput == "rock") ? "Computer wins"
                    :(userInput == "scissors" && computerInput == "paper") ? "User wins"
                    :"tie"
        // better representation of the score
        result = 
        alert(`User choice: ${userInput}\nComputer choice: ${computerInput}\n${result}`);
        // If you want to play again
        let restartGame = confirm("Do you want to play again?")
        if(restartGame) {
            // reload my webpage / game
            location.reload();
        }
        else {
            alert("May be next time.")
        }

    }
    else {
        alert("Wrong input.")
    }
    
    
}
else {
    alert("Ok. Next time then!")
}