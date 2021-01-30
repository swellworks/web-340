/*
============================================
; Title: Exercise 4.2 / WEB340
; Author: 
; Date: 29 Janruary 2021
; Modified By: Perry Fulfs
; Description: Hello World
;===========================================
*/ 

var header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 4.2")); // updated content with actual name & assignment name

// start program // 

var express = require("express");

var http = require("http");

var app = express();

var logger = require("morgan");

app.use(logger('dev'));

app.get("/customer/:id",function(request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({

        firstName: "Perry",

        lastName: "Fulfs",

        employeeId: id

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});