const p1Button = document.querySelector("#player1Button");
const p2Button = document.querySelector("#player2Button");
const p1Score = document.querySelector("#p1Display");
const p2Score = document.querySelector("#p2Display");
const resetButton = document.querySelector('#resetButton');
const winningScoreSelector = document.querySelector("#winningScoreSelector");



let p1ScoreCount = 0;
let p2ScoreCount = 0;
let winningScore;
let isGameOver = false;

p1Button.addEventListener("click", function(){
    if(!isGameOver){
        p1ScoreCount += 1;
        if (p1ScoreCount === winningScore){
            isGameOver = true;
        }
        p1Score.innerText = p1ScoreCount;  
    }   
})

p2Button.addEventListener("click", function(){
    if(!isGameOver){
        p2ScoreCount += 1;
        if (p2ScoreCount === winningScore){
            isGameOver = true;
        }
        p2Score.innerText = p2ScoreCount;  
    }   
})


winningScoreSelector.addEventListener("change", function(){
    reset();
    winningScore = parseInt(this.value);
})

resetButton.addEventListener("click", function(){
    reset();
})

function reset(){
    isGameOver = false;
    p1ScoreCount = 0;
    p2ScoreCount = 0;
    p1Score.innerHTML = 0;
    p2Score.innerHTML = 0;
}
