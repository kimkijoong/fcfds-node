var express = require('express');
var app = express();


app.set("port", process.env.PORT || 8080);

app.get('/', function(req, res){
  res.type("text/plain");
  res.send("Hello minininini!!");
});

app.use(function(req, res){
    res.type("text/plain");
    res.status("404");
    res.send("404 - Not Found");
});

app.use(function(req, res){
  res.type("text/plain");
  res.status("500");
  res.send("500 - Server Error");
});

app.listen(app.get("port"), function(){
  console.log("Frist express SErver is running at locallhost:" + app.get("port"));
});
