var express = require("express");
var app = express();

app.use('/name/:userName/location/:userLocation',(req,res)=>
{
    console.log("inside");
       var params= req.params;
       console.log(params);
       var uname = params.userName;
       res.write("user name "+uname);
       var ulocation = params.userLocation;
     
       res.write("user location "+ulocation);
       res.end();
});
app.listen(3000,function()
{
    console.log("listening at 3000");
});