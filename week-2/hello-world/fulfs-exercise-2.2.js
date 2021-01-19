var express = require('express'); //add express file name
var http = require('http'); //add http to start server

var app = express(); //add for the express app


app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})

http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});