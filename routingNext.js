var express = require('express');
var app = express();

var nameFinder = (req,res,next) =>
{
     var name = req.query.name;
     if(name)
        {
            req.username = name.toUpperCase();
        }
        else{
            req.username = 'Guest';
        }
        next();
}
    var greeter = (req,res,next) =>
    {
       res.status(200);
        res.write('Hello '+req.username);
        next();
    }

    var adminName = (req,res,next)=>
    {
        req.username= "Admin";
        next();
    }

var logger = (req,res,next)=>
{
    var url = req.url;
    var date = new Date();
    console.log("request came for "+url+" on "+date);
    next();
}

app.use('/welcome', nameFinder,greeter,logger,(req,res)=>{res.end();});
app.use('/admin', adminName,greeter,logger,(req,res)=>{res.end();});

app.listen(3000,function()
{
    console.log("listening at 3000");
});