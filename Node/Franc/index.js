const franc = require("franc");
const langs = require("langs");
const color = require("colors");


let input = process.argv[2];

const langCode = franc(input);

if(langCode === "und") {
    console.log("Language could not be identified".red);
} else {
    const lang = langs.where("3", langCode).name;
    if(langCode){
        console.log(`Our best guess would be ${lang.green}`);
    
    } else console.log("Sorry, can't find the right language you mentioned!".red);
}

// console.log(langs.where("3", langCode).name);