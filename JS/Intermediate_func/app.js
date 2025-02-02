//FOR EACH method, basically what it does is, it will execute the function everytime for each element present inside of an array separa

const numbers = [1,2,3,4,5,6,7,8,9];
//FIRST WAY
function square(x){
    console.log(x*x);
}
numbers.forEach(square)
//ANOTHER WAY
numbers.forEach(function el(num){
    console.log(num);
})
//SECOND EXAMPLE
numbers.forEach((x)=>{
    if(x%2==0){
        console.log(`${x} is even`);
    } else{
        console.log(`${x} is not even`);
    }
})
//WE CAN DECLARE THE FUNCTION IN ANOTHER WAY

//MAP METHOD : This is exactly the same as forEach method, but instead of return the values, it will return the values inside of an array :)
const result = numbers.map(function(num){
    return num*num;
});
console.log(result);

//ARROW FUNCTIONS
let greet = (name) => {
    console.log(`Hey ${name}!`) ;
}

//IMPLICIT FUNCTIONS
const randomVar = (limit) => (
    Math.floor(Math.random() * limit) + 1
)

//ANOTHER WAY TO WRITE IMPLICIT FUNCTIONS ARE : You don't need to put the paranthesis when you are returning just a one liner
const add = (a,b) => a+b 

//RETURNING A isEven func in an implicit function format
const isEven = (num) => num%2===0

 //setTimeOut : It is a callback function that will execute the function that you give after the specified time
// setTimeout(()=>console.log("Hello"), 2000);

//setInterval : It will call the function repeatedly over the time interval you specified
//const id = setInterval(()=>console.log(Math.random()),2000);
// clearInterval(id);


//FILTER METHOD : Basically this will create a subset of array from the main array without altering the main one.

const randomNum = [1,2,3,4,5,6,78,69,59,89];
const newArray = randomNum.filter((n)=> n<5);


//EVERY and SOME: Returns boolean value based on the conditions you give
const isEveryTrue = randomNum.every(nums=>nums<50);
const isSomeTrue = randomNum.some(function(num){
    return num>100;
});

//REDUCE FUNCTION : It will have two parameters, accumulator and currentValue, Refer the notes for better understanding
const prices = [10,199,299,,5,45,43,57,8];
let lowestPrice = prices.reduce((x,y)=>{
    if (x<y){
        return x;
    }
    return y;
})