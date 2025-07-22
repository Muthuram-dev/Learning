import { franc } from "franc";
// import pkg from "langs";
// const { langs } = pkg;
import langs from "langs";

let input = process.argv[2];

const langCode = franc(input);

if(langCode === "und") {
    console.log("Language could not be identified");
} 

console.log(langs.where("3", langCode).name);
