const btn = document.querySelector("#v2");

btn.onclick = () => {
    console.log("YOU CLICKED ME DA");
    console.log("It works on a separate JS file");
}

btn.onmouseenter = () => {
    console.log("mouse just entered this button now!");
}