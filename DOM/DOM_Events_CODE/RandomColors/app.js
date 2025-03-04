const randomButton = document.querySelector("#rndButton");
const heading = document.querySelector("h1");

const randomColor = () => {
    const random1 = Math.floor(Math.random() * 255) + 1;
    const random2 = Math.floor(Math.random() * 255) + 1;
    const random3 = Math.floor(Math.random() * 255) + 1;
    

    return { newColor: `rgb(${random1},${random2},${random3})`, sum: random1+random2+random3};

}


randomButton.addEventListener("click", ()=> {
    const {newColor, sum} = randomColor();

    document.body.style.backgroundColor = newColor;
    heading.innerText = newColor;
    
    if(sum < 120){
        heading.style.color = "white";
    }
});



