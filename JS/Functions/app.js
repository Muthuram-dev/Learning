console.log("FUNCTIONS IN JS");
// function singSong(){
//     console.log("Hello there");
//     console.log("My dog died");
// }
// singSong();

//FUNCTIONS WITH PARAMETERS AND ARGUMENTS
// function greet(personName){
//     console.log(`Hey there ${personName}!`);
// }
//PASSING MULTIPLE ARGUMENTS INTO A FUNCTIOn
// function greet(firstName, secondName){
//     console.log(`hey there ${firstName}. ${secondName[0]}`);
// }

// function repeat(string, times){
//     finalResult = "";
//     for(let i = 0; i<times; i++){
//         finalResult += string;
//     }
//     console.log(finalResult);
// }

//USING OF RETURN KEYWORD
//Unlike using console.log() that doesn't let you save up the value in a variable which you get in the O/P, using return statement would be beneficial to save the value of the O/P insde of an variable and call the function
// function add(x,y){
//     if(typeof(x) !== 'number' || typeof(y) !== 'number'){
//         return "Enter a proper value";
//     }
//     return x + y;
// }

// function lastElement(array){
//     if(array.length === 0){
//         return null;
//     } 
// }

// function sumArray(array){
//     let sum =0;
//     for(let i=0; i<array.length; i++){
//         sum = sum + array[i];
        
//     }
//     return sum;
// }

// DEFINE YOUR FUNCTION BELOW:
// function weekdays(num){
//     if(num<0 || num>7){
//         return null;
//     }
//     else if(num === 1){
//         return "Monday";
//     }
//     else if(num === 2){
//         return "Tuesday";
//     }
//     else if(num === 3){
//         return "Wednesday";
//     }
//     else if(num === 4){
//         return "Thursday";
//     }
//     else if(num === 5){
//         return "Friday";
//     }
//     else if(num === 6){
//         return "Saturday";
//     }
//     else if(num === 7){
//         return "Sunday";
//     }
// }
// console.log(weekdays(6));

//SCOPE : Variable Visibility, Basically where we declare a variable decides where we can have access to that particular variable in the code-base.


// let totalValue = 0;
// function showTotal(){
//     totalValue = 6;
// }
// console.log(totalValue, "Before calling the function");
// showTotal();
// console.log(totalValue, "After calling the function");

//SIMPLE EXAMPLE
// let yourName = "Muthuram";
// function showYourName(){
//     let yourName = "Sriram"; //LOCAL VARIABLE THAT WILL BE USED INSIDE THE FUNCTION
//     console.log(yourName);
// }
// showYourName();
// console.log(yourName); //GLOBAL SCOPE THAT CAN BE USED OUTSIDE THE FUNCTION

//BLOCK SCOPE : Techincally, Whenever you declare a variable inside of a block, you can use the variable only inside of the block, but not outside of it. (A block is something that is enclosed inside of curly braces)
//EXAMPLE

// for(let i =0; i<10; i++){
//     let declaredVar = "Something";
// }
// console.log(declaredVar); //WON'T BE PRINTED

//LEXICAL SCOPE : BASICALLY, ONCE YOU DECLARE A VARIABLE INSIDE OF AN FUNCTION, YOU CAN ABLE TO USE THAT VARIABLE ACROSS THE FUNCTION WHICH IS NESTED USING THE REFERENCE FROM THE PARENT and GRAND-PARENT...SO ON

// function lexicalFunction(){
//     const datas = [1,2,3,4,5,6,7];
//     function insideFunction1(){
//         function insideFunction2(){
//             for(data of datas){
//                 console.log(data);
//             }
//         }
//         insideFunction2();
//     }
//     insideFunction1();
// }
// lexicalFunction();

//FUNCTION EXPRESSIONS : Basically another way to declare a function and assign that to a variable :)
// let sum = function(x,y){
//     return x+y;
// }
// sum(4,5); //OUTPUT IS GOING TO BE THE SUM OF THE NUMBERS YOU GIVE


//HIGHER ORDER FUNCTION
// const rollDie = function(){
//     let random = Math.floor((Math.random() * 6)) + 1;
//     console.log(random) ;
// }

// function callThrice(f){
//     f();
//     f();
//     f();
// }
// callThrice(rollDie);

//FACTORY FUNCTION : Basically, it will help you to create functions by calling a function 
// function isBetween(min,max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }
// let hunderedTwoHundered = isBetween(100,200);
// hunderedTwoHundered(150);


// function betweenNumbers(min, max){
//     return function isBetween(num){
//         if(num>= min && num <= max){
//             return true;
//         }
//         return false;
//     }
// }

//CREATING OUR OWN  METHOD, WHAT IS METHODS? Methods are basically functions that can be called by using the dot operation followed by an Object. 
//EXAMPLE

// const myMath = {
//     sub: function(num1, num2){
//         return num2 - num1;
//     },
//     add: function(num1,num2){
//         return num1 + num2;
//     },
//     PI : 3.14
// }

//ANOTHET WAY OF WRITING OUR OWN METHODS ARE : Basically whenever you are about to write a function, you don't need to mention the "function" keyword inside of the object literal in which you are creating the method in.
// const myMath = {
//     sub(x,y){
//         return x -y;
//     },
//     add(x,y){
//         return x+y;
//     },
//     PI : 3.14
// }

// const something={
//     name: "XYZ",
//     callName(){
//         return this.name;
//     }
// }


//TRY AND CATCH BLOCK : Used to handle errors and not making them to crash the entire codebase
// something.toUpperCase();

// try{
//     something.toUpperCase();
// } catch{
//     console.log("Something went wrong!");
// } 
