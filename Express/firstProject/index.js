const express = require("express");

const app = express();

// app.use((req, res) => {
//     // console.dir(req);
//     // console.log("You got2 a new request!")
//     res.send("hello, we got the request")
// })



app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1> Welcome to the ${subreddit} subreddit`)
})

app.get("/search", (req, res) => {
    const { q, color } = req.query;
    res.send(`<h2> You are looking for the query: ${q} and the color: ${color}`);
})

app.get("/", (req, res) => {
    res.send("Welcome to the home page")
})

app.post("/cats", (req, res) => {
    res.send("You get 5 kitties")
})

app.get("/cats", (req, res) => {
    res.send("MEOW")
})

app.post("/dogs", (req, res) => {
    res.send("You get 5 puppies")
})

app.get("/dogs", (req, res) => {
    res.send("WOOF")
})

app.get(/(.*)/, (req, res) => {
    res.send("The page you are looking for doesn't exist")
})
app.post(/(.*)/, (req, res) => {
    res.send("The page you are looking for doesn't exist")
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
});