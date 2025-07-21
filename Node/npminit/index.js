const figlet = require("figlet");
const colors = require("colors");

figlet("A cool name", function(err, data){
    if(err){
        console.log("Something is not good");
        return;
    } console.log(data.red);
})