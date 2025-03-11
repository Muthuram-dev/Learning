const randomColor = () => {
    const random1 = Math.floor(Math.random() * 255) + 1;
    const random2 = Math.floor(Math.random() * 255) + 1;
    const random3 = Math.floor(Math.random() * 255) + 1;
    

    return `rgb(${random1},${random2},${random3})`
}

function colorize(){
    this.style.color = randomColor();
    this.style.backgroundColor = randomColor();
};

const buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click", colorize)};

const headings = document.querySelectorAll("h1");
for (let heading of headings){
    heading.addEventListener("click", colorize);
}

