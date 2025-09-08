const express = require("express");
const app = express();





// app.use((req, res)=>{
//     console.log("There comes a request to this server!");
//     res.send("The incoming request has been stored!");

// })


//ROUTING

app.get("/", (req, res) =>{
    res.send("Welcome to our home page");
})

app.get("/help", (req, res)=>{
    res.send("How may we help you with our app?");
})


app.get("/careers", (req, res)=>{
    res.send("Welcome to our career page, do you want to be a part of our team?");
})


//PATH PARAMETERS
app.get("/r/:subreddit/:comments", (req, res) => {
    const { subreddit, comments } = req.params;
    res.send(`Welcome to the ${subreddit}, and you are viewing ${comments} in this.`);
})


//QUERY STRINGS
app.get("/search", (req, res) =>{
    const {filter} = req.query;
    if (!filter){
        res.send("<h1>Nothing will be here if nothing is searched up.</h1>");
    }
    res.send(`Did you just seatch for ${filter}`);
})



app.get(/(.*)/, (req,res) =>{
    res.send("Make sure you are in the right URL")
})

app.listen(8080, (req, res)=>{
    console.log("Listening in port 8080");

})

