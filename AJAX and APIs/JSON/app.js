const data = `{"name":"Alice","age":25,"isStudent":false}`;
const parsedJSON = JSON.parse(data);
console.log(parsedJSON.name);

const objectExample = {firstName : "John", secondName : "Doe"}
const stringifyJSON = JSON.stringify(objectExample);
console.log(stringifyJSON);
