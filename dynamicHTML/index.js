const express = require("express");
const path = require("path");
const data = require("./data.json")
const app = express();







app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/cats", (req, res) => {
    // res.send("Welcome to the Cats page!");
    const cats = ["hailey", "daisy", "chigga", "nuggets", "pumpkins"];
    res.render("cats", {kitties : cats});
})

app.get("/r/:subreddit", (req, res) =>{
    const { subreddit } = req.params;
    const subredditData = data[subreddit];
    console.log(subredditData);
    res.render("subreddit", {subreddit});
    
})

app.get("/random", (req, res) => {
    const randNum = Math.floor(Math.random() * 10) +1;
    res.render("random", {random: randNum});
})

app.get(/(.*)/, (req, res) => {
    res.render("errorPage");
})

app.listen("3000", () => {
    console.log("listening on 3000");
})