// const input = document.querySelector("input");
// input.addEventListener("input", function(){
//     console.log(input.value);
// })

//The above code actually will listen to the input chatacters as you proceed to type into the input field


const input = document.querySelector("input");
input.addEventListener("change", function(){
    console.log(input.value);
})

//Whereas Change on the other hand, will only take the input after you click away from the input field