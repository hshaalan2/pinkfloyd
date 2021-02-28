
//declaring statistics variables:
// let userWin = 0;
// let tie = 0;
// let userLose = 0;
// let computerWin = 0;
// let computerLose = 0;

//promt
let playAgain = confirm("Want to play?");
//while(Boolean) is same synatx as while(Boolean === true)
while(playAgain){
    //asking user for input 
    let userChoice = prompt("Enter R for Rock, P for Paper, S for Scissors");
    if (userChoice === "R") {
        // confirm("Are you Sure?")
        alert("You have selected Rock")
    } else if (userChoice === "P") {
        // confirm("Are you Sure?")
        alert("You have selected Paper")
    } else if (userChoice === "S") {
        // confirm("Are you Sure?")
        alert("You have selected Scissors")
    }
    console.log(`User choice is ${userChoice}`)

    //Getting random number between 0, 1, 2 for computerChoice
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let randomNumber = getRandomInt(3);
    //Connecting random numbers to dedicated computer choice
    //declare computer choice variable and define it later
    let computerChoice;
    if(randomNumber === 0){
        alert("Computer chose Rock");
        computerChoice = "R";
    } else if(randomNumber === 1){
        computerChoice = "P";
        alert("Computer chose Paper");
    } else{
        computerChoice = "S";
        alert("Computer chose Scissors");
    }
    //console logging computer choice
    console.log(`Computer choice is ${computerChoice}`);

    //comparing user choice vs computer
    //going through different combinations 
    //declare result variable and define it later
    let result;
    if(userChoice === computerChoice){
        result = "Tie";
        //incrementing count variables
        tie++;
    }else if((userChoice === "R" && computerChoice === "S")||
             (userChoice === "S" && computerChoice === "P")||
             (userChoice === "P" && computerChoice === "R") ){
        result = "You win!";
        //incrementing count variables
        userWin++;
    }else {
        result = "Computer win!"
        computerWin++;
    }
    //alerting result
    alert(result);
    //alerting the running tally of statistcs
    alert(`tie: ${tie}\nUser wins: ${userWin}\nUser lose: ${userLose}\nComputer wins: ${computerWin}\nComputer lose: ${computerLose}`)
    console.log(result);
    console.log(`tie: ${tie}`)
    console.log(`User wins: ${userWin}`)
    console.log(`User lose: ${userLose}`)
    console.log(`Computer wins: ${computerWin}`)
    console.log(`Computer lose: ${computerLose}`)

    //asking user if wants to play again?
    //if yes, loop will repeat again
    playAgain = confirm("Want to play again?");
}