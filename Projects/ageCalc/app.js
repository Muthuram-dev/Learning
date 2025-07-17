const dob = document.querySelector("#dob");
const form = document.querySelector("form");
const p = document.querySelector("p");



const today = new Date();
form.addEventListener("submit", function(e){
    e.preventDefault();

    const year = today.getFullYear();
    const inputDate = parseInt(dob.value);
    if (isNaN(inputDate) || inputDate > year || inputDate < 1900){
        alert("Enter a valid age")
    } else {
    const age = year - inputDate;
    p.innerText = `You are ${age} years old`
    }

})