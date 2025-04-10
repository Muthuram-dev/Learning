const p1 = {
    score : 0,
    button :document.querySelector("#player1Button"),
    display : document.querySelector("#p1Display")
};

const p2 = {
    score : 0,
    button :document.querySelector("#player2Button"),
    display : document.querySelector("#p2Display")
};

const p1Name = prompt("Enter the player 1 name: ");
const p2Name = prompt("Enter the player 2 name: ");
p1.button.innerHTML = `${p1Name} +`;
p2.button.innerHTML = `${p2Name} +`;
p1.name = p1Name;
p2.name = p2Name;

const resetButton = document.querySelector('#resetButton');
const winningScoreSelector = document.querySelector("#winningScoreSelector");

let winningScore;
let isGameOver = false;



function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if (player.score === winningScore){
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
            alert(`${player.name} has won the game with ${player.score - opponent.score} difference`);

        }
        player.display.innerText = player.score;  
    }
};

p1.button.addEventListener("click", function(){
    updateScores(p1,p2);
});

p2.button.addEventListener("click", function(){
    updateScores(p2,p1);
});


winningScoreSelector.addEventListener("change", function(){
    reset();
    winningScore = parseInt(this.value);
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.innerHTML = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;

    }
};