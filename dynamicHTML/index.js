const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Welcome to the home page");
})


app.listen("3000", () => {
    console.log("listening on 3000");
})