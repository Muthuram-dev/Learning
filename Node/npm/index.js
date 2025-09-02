const joke = require("give-me-a-joke");
const colors = require("colors");

for(let i = 0; i<5; i++){
    joke.getRandomDadJoke(function(joke){
        console.log(joke.rainbow);
    })
}
