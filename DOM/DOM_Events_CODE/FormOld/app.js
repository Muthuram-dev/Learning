const form = document.querySelector("form");
const unorderedList = document.querySelector("ul");
const userName = document.querySelector("#userName");
const favFood = document.querySelector("#favFood");


form.addEventListener("submit", function(e){

    let inputValue = userName.value;
    let inputValue2 = favFood.value;
    const listItem = document.createElement("li");
    listItem.innerText = `name - ${inputValue}, favFood - ${inputValue2}`;
    unorderedList.appendChild(listItem);
    e.preventDefault();

})