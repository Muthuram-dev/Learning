const form = document.querySelector("#sform");
const input = document.querySelector("input");
const list = document.querySelector("#ul");


form.addEventListener("submit", function(e){
    
    e.preventDefault();
    const catName = input.value;

    const newul = document.createElement("LI");

    newul.innerText = catName;
    list.appendChild(newul);
})
