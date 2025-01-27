//MY IDEA(NOT GOOD)
// let maximumNum = parseInt(prompt("Enter the maximum number"));

// while(!maximumNum){
//     maximumNum = parseInt(prompt("Enter a valid maximum number: "));
// }
// const randomNum = Math.floor(Math.random() * maximumNum) + 1;
// let userGuess = parseInt(prompt("Guess the random number"));

// if(userGuess>randomNum){
//     userGuess = parseInt(prompt("The random number is lower than this value"));
// } else{
//     userGuess = parseInt(prompt("The random number is higher than this value"));
// }
// console.log("YOU WON");


//ACTUAL SOLUTION
let maximumNum = parseInt(prompt("Enter the maximum number"));

while(!maximumNum){
    maximumNum = parseInt(prompt("Enter a valid maximum number: "));
    if (maximumNum === 'q'){
        console.log("YOU QUIT");
        break;
    }
}
const randomNum = Math.floor(Math.random() * maximumNum) + 1;
let userGuess = parseInt(prompt("Guess the random number"));
let attemps = 1;

while(parseInt(userGuess)!==randomNum){
    attemps++;
    if (userGuess === 'q') break;
    if(userGuess>randomNum){
        userGuess = prompt("The random value is lower than this");
    }else {
        userGuess = prompt("The random value is higher than this");
    }
}

if (userGuess==='q'){
console.log(`YOU QUIT`);
} else{
    console.log(`YOU WON THE GAME WITH ${attemps} ATTEMPTS`);
}