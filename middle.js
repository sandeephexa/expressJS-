var express = require("express");
var app = express();

app.use('/public', express.static('express'));

app.use(/*default*/ (req,res)=>
{
    res.status(404).sendFile(__dirname +'404 not found');
});
app.listen(3000,function()
{
    console.log("listening at 3000");
});