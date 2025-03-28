const p1Button = document.querySelector("#player1Button");
const p2Button = document.querySelector("#player2Button");
const p1Score = document.querySelector("#p1Display");
const p2Score = document.querySelector("#p2Display");
const resetButton = document.querySelector('#resetButton');


let p1ScoreCount = 0;
let p2ScoreCount = 0;
const winningScore = 5;


p1Button.addEventListener("click", function(){
    p1ScoreCount += 1;
    p1Score.innerHTML = `${p1ScoreCount}`  
    if (p1ScoreCount >= 5){
        alert("Player1 won!");
    }
})

p2Button.addEventListener("click", function(){
    p2ScoreCount += 1;
    p2Score.innerHTML = `${p2ScoreCount}`  

})
