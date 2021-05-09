const playerBtns = document.querySelectorAll('.player-choise button');
const showResult = document.querySelector('.result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const list = ["Rock", "Paper", "Scissors"];
const score = [0, 0];

playerBtns.forEach(btn => btn.addEventListener('click', start));

function checkScore() {
    if(score[0] === 5 || score[1] === 5) {
        showResult.style.background = 'var(--white2)';
        score[0] === 5 && score[1] === 5 ? showResult.textContent = 'DRAW' : 
        score[0] === 5 ? showResult.textContent = 'You Won The Game' : 
        showResult.textContent = 'You Lost The Game';

        playerBtns.forEach(btn => btn.disabled = true);
        
        setTimeout(() => {
            showResult.style.fontSize = '4rem';
            showResult.style.background = '';
            playerBtns.forEach(btn => btn.disabled = false);
            score[0] = 0;
            score[1] = 0;
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            showResult.textContent = 'Score Five Points';
        }, 2000);
    }
};

function start(e) {
    e.target.classList.add('selected');
    e.target.classList.remove('button');
    let pcChoise = computerPlay();
    let pcBtn = document.querySelector('.computer-choise button[data-item="' + pcChoise.toLowerCase() +'"]');
    pcBtn.classList.add('selected');
    pcBtn.classList.add('active')
    playRound(this.getAttribute('data-item'), pcChoise)
    playerScore.textContent = score[0];
    computerScore.textContent = score[1];
    checkScore()

    setTimeout(() => {
        pcBtn.classList.remove('selected');
        pcBtn.classList.remove('active')
        e.target.classList.remove('selected')
        e.target.classList.add('button')
    }, 500);
};

function computerPlay() {
    return list[Math.floor(Math.random() * list.length)];
};

function playRound(playerSelection, computerSelection) {
    let pStr = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let cStr = computerSelection;

    if( pStr === cStr ) {
        score[0] += 1;
        score[1] += 1;
        return showResult.textContent = "Draw"
    } else if (
        pStr === list[0] && cStr === list[2] ||
        pStr === list[1] && cStr === list[0] ||
        pStr === list[2] && cStr === list[1]
    ) {
        score[0] += 1;
        return showResult.textContent = "You Win! " + pStr + " beats " + cStr;
    } else {
        score[1] += 1;
        return showResult.textContent = "You Lose! " + cStr + " beats " + pStr
    }
};
