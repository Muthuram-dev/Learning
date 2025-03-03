// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i =0; i<200; i++){
    const div = document.createElement("div");
    // div.style.textAlign = "centre";
    div.style.display = "inline-block";


    const lable = document.createElement("span");
    lable.innerText = `${i}`;
    const img = document.createElement('img');
    img.src = `${baseURL}${i}.png`;

    div.appendChild(img);
    img.appendChild(lable);
    container.appendChild(div);

};