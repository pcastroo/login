const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile("/home/castro/git/login/public/create.html");
});

app.get("/create-account", function(req, res){
    res.sendFile("/home/castro/git/login/public/index.html");
});

//localhost:8080
app.listen(8081);