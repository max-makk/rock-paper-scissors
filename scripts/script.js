const list = ["Rock", "Paper", "Scissors"];
const score = [0, 0];

function computerPlay() {
    return list[Math.floor(Math.random() * list.length)];
}

function playRound(playerSelection, computerSelection) {
    let pStr = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let cStr = computerSelection;

    if( pStr === cStr ) {
        return "Draw"
    } else if (
        pStr === list[0] && cStr === list[2] ||
        pStr === list[1] && cStr === list[0] ||
        pStr === list[2] && cStr === list[1]
    ) {
        score[0] += 1;
        return "You Win! " + pStr + " beats " + cStr;
    } else {
        score[1] += 1;
        return "You Lose! " + cStr + " beats " + pStr
    }
}

function start() {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock, Paper or Scrissors?", "");
    return console.log(playRound(playerSelection, computerSelection));
}

for(let i = 0; i < 5; i++) {
    start()
    if(i === 4) {
        score[0] > score[1] ? 
        console.log("Player Win") : 
        score[1] > score[0] ? 
        console.log("Computer Win") : 
        console.log("DRAW!")
    }
}