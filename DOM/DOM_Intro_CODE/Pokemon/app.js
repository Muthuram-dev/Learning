// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i =0; i<200; i++){
    const img = document.createElement('img');
    img.src = `${baseURL}${i}.png`;
    container.append(img);
};