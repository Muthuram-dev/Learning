const form = document.querySelector("#sform");
form.addEventListener("submit", function(e){
    console.log("SUBMITTED");
    e.preventDefault();
})