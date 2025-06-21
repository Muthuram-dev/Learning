// How to declare ASYNC function, down below
// NORMAL FUNC


function hello(){

}
// ASYNC FUNCTION
async function sender(){

}
// ASYNC ARROW FUNCTION
const function1 = async () =>{

}


const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

async function rainbow(){
    await delayedColorChange("red",1000);
    await delayedColorChange("green",1000);
    await delayedColorChange("olive",1000);
    await delayedColorChange("indigo",1000);
    await delayedColorChange("blue",1000);
    return "ALL DONE!"
}

rainbow()
.then(successMsg => console.log(successMsg));
