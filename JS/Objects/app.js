//OBJECTS

// DECLARATION
// const person1 = {fistName:"Nigga", lastName : "man", height: 183, weight:70, isHealthy:true};
// console.log(person1);

// //ACCESSING
// console.log(person1.fistName);
// console.log(person1["lastName"]);
// You can access the properties inside an object literal in 2 ways, either by the dot or by the square brackets and quotes. I would like to use the dot method more as it doens't require any quotes and it's fairly easy to use and not confusing.

// All the kets that you use in the object literal will change into a string, that includes the keywords like true, null, undefined, numbers, anything
// const object2 = {null: "nothing", undefined: "Alsonothing", true: "false", 6969: "nice"};
// console.log(object2.null); //Won't give an error

// WHY USE SQUARE BRACKETS TO ACCESS THE VALUES? 
// const years = {2005: "Good", 2022 : "Bad"};
// let something = 2022;
// console.log(years[something]); //This is going to return Bad

//MODIFYING VALUES INSIDE OF AN OBJECT LITERAL
// const example_obj = {firstName: "Sri", secondName:"ram"};
// example_obj.firstName = "Muthu";
// console.log(example_obj.firstName); // Will print the value Muthu

//NESTED ARRAY WITH OBJECTS
// const comments = [
//     {userName: "user1", text: "Nice", time: "2weeks back"},
//     {userName: "user2", text: "Bad", time: "4weeks back"}
// ];
//To access the elements inside that object which is inside an array
// console.log(comments[0].userName); //Specifyting the index value of the object first followed by calling the property name