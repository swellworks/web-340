/*
============================================
; Title: Exercise 4.3 / WEB340
; Author: 
; Date: 30 Janruary 2021
; Modified By: Perry Fulfs
; Description: HTTP Status Codes
;===========================================
*/ 

// var header = require('../fulfs-header.js'); // added file from root directory

// console.log(header.display("Perry", "Fulfs", "Exercise 4.3")); // updated content with actual name & assignment name

// start program // 

var express = require('express');

var http = require('http');

var app = express();

app.get('/not-found', function(request, response){
    response.status(404);
    response.json({
        error: "Resource not found."
    })
});

app.get('/ok', function(request, response){
    response.status(200);
    response.json({
        message: "Page loaded correctly."
    })
});

app.get('/not-implemented', function(request, response){
    response.status(501);
    response.json({
        error: "Page not implemented."
    })
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");

});