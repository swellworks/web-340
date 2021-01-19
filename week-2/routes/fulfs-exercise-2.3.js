var express = require('express');
var http = require('http');

var app = express();

// routes 
app.get('/', function(){
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res)
{
    res.end('Welcome to the homepage.\n');
});

app.get('/contact', function(req, res)
{
    res.end('Welcome to the cotact page.\n');
});

app.use(function(req, res)
{
    res.statsCode = 404;
    res.end('404!\n');
});

http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);
});