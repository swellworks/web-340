// requires
var express = require('express');
var http = require('http');
var path = require('path');

// app functions
var app = express();
app.set('views', path.resolve(__dirname, 'views')); // views folder & views engine
app.set('view engine', 'ejs'); // use this view engine ejs


// loccal composer arry
var composers = [
   "Bach", 
   "Mozart",
   "Beethoven",
   "Verdi"
];

// routes
app.get('/', function(req, res){
    res.render('index', {
        names: composers
    });
});

// create server
http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port 3000')
});


