const express = require("express");

const app = express();

app.get("*", (req, res) => {
    console.log("request received");
    res.send("<h1>Hello, Vlad!</h1>");
});

app.listen(5000, () => {
    console.log("App started at port 5000");
});