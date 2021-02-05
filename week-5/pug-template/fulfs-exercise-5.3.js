// requires
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

// app functions
var app = express();
app.set('views', path.resolve(__dirname, 'views')); // views folder & views engine
app.set('view engine', 'pug'); // use this view engine pug


// // loccal composer arry
// var composers = [
//    "Bach", 
//    "Mozart",
//    "Beethoven",
//    "Verdi"
// ];

// routes
app.get('/', function(req, res){
    res.render('index', {
        message: 'Strive not to be a success, but rather to be of value. -Albert Einstein'
    });
});

// create server
http.createServer(app).listen(3030, function() {
    console.log('Application started and listening on port 3030')
});


