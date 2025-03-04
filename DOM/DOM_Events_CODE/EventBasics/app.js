const btn = document.querySelector("#v2");

btn.onclick = () => {
    console.log("YOU CLICKED ME DA");
    console.log("It works on a separate JS file");
}

btn.onmouseenter = () => {
    console.log("mouse just entered this button now!");
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", ()=>console.log("You just clicked the v3 button!"));

//The difference between using a eventListener and normal events is beacuse of the overwritting concept, by using the normal events, the latest called function will run, but not both. 

const shout = () => {
    console.log("Shout");
}

const twist = () => {
    console.log("twist");
}
const tasButton = document.querySelector("#TAS");
// tasButton.onclick = shout; 
// tasButton.onclick = twist; 

tasButton.addEventListener("click", shout, { once:true }); //The third parameter is called optional, in which you can add some additional info
tasButton.addEventListener("click", twist);
//The above code will execute both of the functions 