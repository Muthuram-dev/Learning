console.log("LOOPS!");
// for (i=1;i<11;i++){
//     console.log(`Line${i}`);
// }

//PRINTING EVEN NUMBERS FROM 0 to 20
// for(let nums =0; nums<=20; nums++){
//     if(nums%2==0){
//         console.log(nums);
//     }
// }


//PRINTING FROM 100 -> 0 by 10 blocks down
// for (let i = 100; i>0; i = i -10){
//     console.log(i);
// }


// for (let i = 25; i>0; i-=5){
//     console.log(i);
// }


//TRAVERSING THROUGH AN ARRAY USING FOR LOOP
// const movies = [1,2,3,4,5,6,7,8,9,10];
// for (let i =0; i < movies.length ; i++){
//     console.log(movies[i]);
// }
// for(let i = movies.length-1; i>=0;i--){
//     console.log(movies[i]);
// }

//NESTED LOOP
// for (let i = 1; i <= 10; i++){
//     console.log(i);
//     for(let j =1; j<4; j++){
//         console.log(j);
//     }
// }


//TRAVERSING INSIDE OF AN MULTI-DIMENSIONAL ARRAY USING FOR LOOP, NEED TO LOOK INTO THE TOPIC AGAIN
// const multiArray = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for (let i = 0; i < multiArray.length; i++){
//     console.log(`ROW #${i + 1}`);
//     let rows = multiArray[i];
//     for (let j = 0; j<rows.length ; j++){
//         console.log(rows[j]);
//     }
// }


//WHILE LOOP
// let count = 0;
// while(count<10){
//     count++;
//     console.log(count);
// }

// const password = "123";
// let guess = prompt("Guess the password");
// while (guess!== password){
//     guess = prompt("Guess the password")
// }

// let userString = prompt("Enter a string that you want the computer to repeat!");
// while(true){
//     userString = prompt(userString);
//     if(userString.toLowerCase()==="exit"){
//         break;
//     }
// } 

//FOR OF LOOP
//Good to iterate over arrays

// const wonderla = ['Ragul', 'Adithya', 'Mano', 'mukeshKumar','umesh', 'Praveen'];
// //Normal approach using for loop

// for (let i =0; i< wonderla.length; i++){
//     console.log(`Train ticket ${wonderla[i]}`);
// }

// //FOR OF LOOP

// for(person of wonderla){
//     console.log(`Train ticket ${person}`);
// }

// //We can also use for of loop to iterate over multi-dimensional arrays

// const something = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// //THE BETTER WAY TO ITERATE OVER THE MULTI_DIMENSIONAL ARRAY

// for (let rows of something){
//     for (let content of rows){
//         console.log(content);
//     }
// }
// //THE NORMAL WAY TO ITERATE OVER THE MULTI_DIMENSIONAL ARRAY

// for(let i = 0; i<something.length; i++){
//     let rows = something[i];
//     for(let j =0; j < rows.length; j++){
//         console.log(rows[j]);
//     }
// }

//FOR IN LOOP 
//MOSTLY IT IS USED TO ITERATE OVER AN OBJECT LITERAL BECAUSE NORMAL FOR LOOP CANNOT BE USED TO ITERJECT LITERAL
const testScores = {
    Adithya: 100,
    Ragul: 130,
    MukeshKumar: 80,
    Myself: 75
}

// for (let person in testScores){
//     console.log(`${person} scored ${testScores[person]} in the test `);
// }

let totalSum = 0;
for (let values of Object.values(testScores)){
    totalSum += values;
    console.log(values);
}
let average = totalSum / (Object.keys(testScores)).length;
console.log(`The average marks scored by all of them are ${average}`);