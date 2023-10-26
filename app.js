//require packages

const express = require('express');
const app = express();

app.set("view engine","ejs")

//middleware
app.use(express.static("./Public"));

//routes 


app.get("/", function(req, res){
    res.render("index");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("/profile/:username", function(req, res){
    res.send(`hello from ${req.params.username}`);
})

//app listening on port
app.listen(3000);