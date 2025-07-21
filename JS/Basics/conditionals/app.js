// BASIC AGE CONDITIONS

let age1 = prompt("Enter your age: ");
if (age1 < 18 && age1 >= 0) {
    console.log("You are not allowed inside");

} else if (age1 >= 18 && age1 <= 100) {
    console.log("You are allowed inside")
} else {
    console.log("Please enter a valid age");
}


// THEME PARK PRICING SYSTEM ACCORDING TO DIFFERENT AGE
const age = prompt("Enter your age: ");
if(age>0 && age<5){
    console.log("You are a baby, you get in for free!");
} else if(age>=5 && age <18){
    console.log("You are a child, you must pay 10rs");
} else if (age>=18 && age <=65){
    console.log("You are an adult, you get in for 20rs");
} else if(age>65 && age < 100){
    console.log("You are a senior citizen, you get in for 10rs");
} else {
    console.log("ERROR! Enter a valid age");
}



// PASSWORD STRENGTH CHECKER
const password = prompt("Enter a password");
if (password.length >=8 && password.indexOf(" ") === -1 ){
    console.log("Good password")
} else if(password.length<8 || password.indexOf(" ")!== -1){
    console.log("Enter a valid password with atleast 8 characters long without any space")
} else{
    console.log("Something unexpected went wrong, try again!")
}


// TRUTHY AND FALSY VALUES
// All the data-types and statements inside the conditional statement refers inherently to falsy values, meaning it won't execute
if(null || undefined || 0 || NaN || false || ""){
    console.log("Print this"); // this won't be printed
} else {
    console.log("print this falsy value");
}


// SWITCH STATEMENT
const day = parseInt(prompt("Enter a day in a week"));
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Enter a valid week number!")
}