var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use('/public/',express.static('express'));
app.use(bodyParser.urlencoded({extended : true}))

app.use('/formHandler',(req,res)=>
{
    var user = req.body.username;
    res.write("username "+user);
    console.log(user);
    var animal = req.body.animals;
    res.write("animal "+animal);
    console.log(animal);
    res.end();
})
app.listen(3000,function()
{
    console.log("listening at 3000");
});