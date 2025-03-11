const button = document.querySelector("button").addEventListener("click", (evt)=>console.log(evt));


const input = document.querySelector("input");
input.addEventListener("keydown", function(e){
    console.log(e);
    console.log(e.key);
    console.log(e.code);
});


const body = document.querySelector("body");
body.addEventListener("keydown",function(e){
    if (e.code === "ArrowUp"){
        console.log("UP!");
    } else if (e.code === "ArrowDown"){
        console.log("DOWN!");   
    } else if (e.code === "ArrowLeft"){
        console.log("LEFT!");   
    }else if (e.code === "ArrowRight"){
        console.log("RIGHT!");   
    }else {
        console.log("IGNORED!");   
    }
});