const express = require("express");
const app = express();
const path = require("path");


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const comments = [
    {
        userName: 'Todd',
        comment: 'lol that is cool'
    },
        {
        userName: 'Skyler',
        comment: 'That is not at all cool'
    },
        {
        userName: 'Pinkman',
        comment: 'Yooo....that is so dope'
    },
        {
        userName: 'Walter',
        comment: 'Hmm...Interesting reaction'
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments })
})

app.get("/", (req, res) => {
    res.send("WELCOME TO THE HOME PAGE")
})

app.get("/tacos", (req, res) =>{
    res.send("GET /tacos response");
})


app.post("/tacos", (req, res)=>{
    res.send("POST/ tacos response");
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})



