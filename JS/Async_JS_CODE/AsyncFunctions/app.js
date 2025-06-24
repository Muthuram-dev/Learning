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

const makingRequest = (url) => {
    delay = Math.floor(Math.random()*1000)+100
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(delay > 4000){
            resolve(`The url has been successfully loaded, here is the url you are looking for ${url}`);
            } reject();
        },delay)
    })
}

makingRequest("www.google.com")
.then((msg)=>{
    console.log("The page 1 is loaded successfully");
    console.log(msg);
    return makingRequest("www.google.com/page2");
})
.then((msg)=>{
    console.log("The page 2 is loaded successfully");
    console.log(msg);
    return makingRequest("www.google.com/page3");
})
.then((msg)=>{
    console.log("The page 3 is loaded successfully");
    console.log(msg);
    return makingRequest("www.google.com/page4");
})
.catch((err)=>{
    console.log("uh oh, something went wrong");
    console.log(err);
})

const makeOneRequest = async() => {
    try{
        let page1 = await makingRequest("www.google.com/page1");
        let page2 = await makingRequest("www.google.com/page2");
        console.log(page1);
        console.log(page2);
    }
    catch(err){
        console.log("Caught an error here", err);
    }
}