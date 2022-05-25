const possibleChoices = document.querySelectorAll('button')
const resultDisplay = document.getElementById('result')
let result
let i 

let computerSelection
let playerSelection


var counter = { player: 1, computer: 1};
// for (let i = 0; i < 5; i++) {
  

// }

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerSelection = e.target.id
  playerSelection.innerHTML = playerSelection
  computerSelection=computerPlay()
  playRound(playerSelection,computerSelection)
  i++
}))

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerSelection = "rock"
      }
      if (randomNumber === 2) {
        computerSelection = "scissors"
      }
      if (randomNumber === 3) {
        computerSelection = "paper"
      }
    return computerSelection;
}

function playRound(playerSelection,computerSelection){
    let win=0
    let loss=0
    if (computerSelection === "rock" && playerSelection === "rock") {
        result = "This round is a tie with two rocks"
        console.log(result)
      }
      if (computerSelection === "paper" && playerSelection === "paper") {
        result = "This round is a tie with two papers"
        console.log(result)
      }
      if (computerSelection === "scissors" && playerSelection === "scissors") {
        result = "This round is a tie with two scissors"
        console.log(result)
      }
        if (computerSelection === "rock" && playerSelection === "paper") {
            result = "You beat the computer's rock with paper"
            //win
            updateScorePlayer() 
          }
          if (computerSelection === "rock" && playerSelection === "scissors") {
            result = "The Computer beat your scissors with a rock"
            //loss
             updateScoreComputer()
  
          }
          if (computerSelection === "paper" && playerSelection === "scissors") {
            result = "You beat the computer's paper with scissors"
            //win
             updateScorePlayer()    
          }
          if (computerSelection === "paper" && playerSelection === "rock") {
            result = "The computer beat your rock with paper"
            //loss
            updateScoreComputer()   
          }
          if (computerSelection === "scissors" && playerSelection === "rock") {
            result = "You beat the computer's scissors with rock"
            //win
            updateScorePlayer()   
          }
          if (computerSelection === "scissors" && playerSelection === "paper") {
           result = "The computer beat your paper with scissors"
           //loss
           updateScoreComputer()   
          }
          resultDisplay.innerHTML = result    
}


function updateScorePlayer(){ 
  document.getElementById("playerscore").innerHTML = counter.player;
  return counter.player+=1;
}
    
   
function updateScoreComputer(){
    document.getElementById("computerscore").innerHTML = counter.computer;
    return counter.computer+=1; 
} 
console.log(counter.player)






// if(playerScore == 5  || computerScore== 5){
//  gameOver()
// }


