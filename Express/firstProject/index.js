const express = require("express");

const app = express();

app.use((req, res) => {
    // console.dir(req);
    // console.log("You got a new request!")
    res.send("hello, we got the request")
})


app.listen(3000, () => {
    console.log("Listening on port 3000");
});