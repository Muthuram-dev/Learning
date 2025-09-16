const express = require("express");
const path = require("path");
const data = require("./data.json")
const app = express();

app.use(express.static(path.join(__dirname, "/public")))







app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) => {
    const {logoName} = req.params;
    res.render("home", {logoName});
})



app.get("/cats", (req, res) => {
    // res.send("Welcome to the Cats page!");
    const {logoName} = req.params;
    const cats = ["hailey", "daisy", "chigga", "nuggets", "pumpkins"];
    res.render("cats", {kitties : cats, logoName});
})

app.get("/r/:logoName", (req, res) =>{
    const { logoName } = req.params;
    const { ...subredditData} = data[logoName];
    console.log(subredditData);
    res.render("subreddit", {logoName, subredditData:subredditData});
    
})

app.get("/random", (req, res) => {
    const {logoName} = req.params;
    const randNum = Math.floor(Math.random() * 10) +1;
    res.render("random", {logoName, random: randNum});
})

app.get(/(.*)/, (req, res) => {
    const {logoName} = req.params;
    res.render("errorPage", {logoName});
})

app.listen("3000", () => {
    console.log("listening on 3000");
})