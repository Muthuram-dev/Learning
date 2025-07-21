const fs = require("fs");
const folName = process.argv[2];


// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('Project', { recursive: true }, (err) => {
//     console.log("Inside the callback")
//   if (err) throw err;
// });

try{
fs.mkdirSync(folName);
fs.riteFileSync(`${folName}/index.html`, "");
fs.writeFileSync(`${folName}/app.js`, "");
fs.writeFileSync(`${folName}/style.css`, "");
} catch(e){
    console.log("Something went wrgon!");
    console.log(e);
}