// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i =0; i<200; i++){
    const div = document.createElement("div");
    div.style.display = "inline-block";
    
    const img = document.createElement('img');
    img.src = `${baseURL}${i}.png`;

    const newB = document.createElement('b');
    newB.innerText = `${i}`;


    container.append(div);
    img.append(newB);
    container.append(img);
};