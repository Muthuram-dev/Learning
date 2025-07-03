//The below code will convert the JSON data into a valid object in JS

const data = `{"name":"Alice","age":25,"isStudent":false}`;
const parsedJSON = JSON.parse(data);
console.log(parsedJSON.name);

//The below code will convert the object into a valid JSON file that can be sent
const objectExample = {firstName : "John", secondName : "Doe"}
const stringifyJSON = JSON.stringify(objectExample);
console.log(stringifyJSON);
