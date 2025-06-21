// const fakeRequest = (url) => {
//     const delayNum = Math.floor(Math.random()*1000)+500;
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (delayNum>1300){
//                 reject("Connection timeout");
//             } else{
//                 resolve("Connection was successfull")
//             }
//         },delayNum);
//     })
// }



// fakeRequest("something.com")
//     .then((url)=>{
//         console.log("it worked and it ran successfully!");
//         console.log(url)
//         return fakeRequest("something.com/page1")
//         })
//     .then((url)=>{
//         console.log("it ran for the second time and passed!")
//         console.log(url)
//         return fakeRequest("something.com/page2")
//         })
//     .then((url)=>{
//         console.log("The third page also ran successfully");
//         console.log(url)
//     })
//     .catch((err)=>{
//         console.log("Uh Oh, something went wrong!");
//         console.log(err);
//     })
    

const delayedColorChange = (color,delay) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}


// delayedColorChange("green",1000)
// .then(()=> delayedColorChange("yellow",1000))
// .then(()=> delayedColorChange("orange",1000))
// .then(()=> delayedColorChange("black",1000))
// .then(()=> delayedColorChange("red",1000))

const rainbow = async () =>{
    await delayedColorChange("red",1000);
    await delayedColorChange("green",1000);
    await delayedColorChange("orange",1000);
    await delayedColorChange("yellow",1000);
    await delayedColorChange("black",1000);
    await delayedColorChange("olive",1000);
    await delayedColorChange("magenta",1000);
}