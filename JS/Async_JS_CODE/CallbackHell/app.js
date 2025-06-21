// setTimeout(()=>{
//     document.body.style.backgroundColor = "orange";
//     setTimeout(()=>{
//         document.body.style.backgroundColor = "red";
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "yellow";
//         },1000);
//     },1000);
// },1000);


// const delayedColorChange = (color, time, doNext) =>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = color;
//         doNext && doNext();
//     },time)
// }
// delayedColorChange("red",1000,()=>{
//     delayedColorChange("orange",1000,()=>{
//         delayedColorChange("yellow",1000);
//     })
// })



// // setTimeout(() => {
// //     document.body.style.backgroundColor = "red";
// //     setTimeout(() => {
// //         document.body.style.backgroundColor = "green";
// //         setTimeout(() => {
// //             document.body.style.backgroundColor = "orange";
// //         },1000);
// //     },1000);
// // },1000);
