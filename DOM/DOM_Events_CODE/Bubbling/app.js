const randomColor = () =>{
    const color1 = Math.floor(Math.random() * 255);
    const color2 = Math.floor(Math.random() * 255);
    const color3 = Math.floor(Math.random() * 255);

    return `rgb(${color1}, ${color2}, ${color3}`;
}

const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");


button.addEventListener("click", function(e){
    container.style.backgroundColor = randomColor();
    e.stopPropagation();
})


container.addEventListener("click", function(){
    container.classList.toggle("hide");
})

