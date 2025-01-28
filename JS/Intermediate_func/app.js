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
numbers.forEach(function evenNum(x){
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
greet("harold");
