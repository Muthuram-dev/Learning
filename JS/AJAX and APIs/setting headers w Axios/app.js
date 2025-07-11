const newJokeButton = document.querySelector("#newJokeButton");
const jokeCount = document.querySelector("#count");
// const jokes = document.querySelector("#jokes");

newJokeButton.addEventListener("click", () => dadJokes());

let count = 0;
const dadJokes = async() => {
    const config = {headers: {Accept: "application/json"}}
    const req = await axios.get("https://icanhazdadjoke.com/", config);
    console.log(req.data.joke)
    // jokes.innerText = req.data.joke;
    
    const jokeElement = document.createElement("p");
    jokeElement.innerText = req.data.joke;
    document.body.appendChild(jokeElement);
    count ++;
    jokeCount.innerText = `Joke count: ${count}`;

}


// dadJokes();


// const dadJokes = async () => {
//     // Directly fetch the image without requesting JSON
//     const imgURL = "https://icanhazdadjoke.com/j/R7UfaahVfFd.png";

//     const img = document.createElement("img");
//     img.src = imgURL;
//     img.alt = "Dad Joke";
//     img.style.width = "400px"; // optional styling
//     img.style.marginTop = "20px";

//     document.body.appendChild(img);
// };

// dadJokes();


