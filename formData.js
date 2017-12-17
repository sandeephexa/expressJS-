var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use('/public',express.static('express'));
app.use(bodyParser.urlencoded({extended : true}))

app.use('/handleForm',(req,res)=>
{
    var user = req.body.username;
    var animals = [].concat(req.body.animal);
    res.type("html").status(200);
    res.write("Hello "+user+" !");
    res.write("<p>Here are the items you selected.</p>");
    res.write("<ul>");
    animals.forEach((animal) => {
        res.write("<li>"+animal+"</li>");

    });
    res.write("</ul>");
    res.write("<a href='/public/formData.html'>"+"Back to form</a>");
});
app.listen(3000,function()
{
    console.log("listening at 3000");
});