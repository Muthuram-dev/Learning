// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//         },1000);
//     },1000);
// },1000);

function delayedColorChange(delay, color, doNext){
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext();
    }, delay);
}
 delayedColorChange(1000, "red", () => {
    delayedColorChange(1000, "yellow", () => {
        delayedColorChange(1000, "green", () => {
            delayedColorChange(1000, "orange", () => {
    
            });
        });
    });
 });

// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//         },1000);
//     },1000);
// },1000);
