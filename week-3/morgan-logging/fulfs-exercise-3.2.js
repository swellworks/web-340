/*
============================================
; Title: Exercise 3.2 / WEB340
; Author: Zahra Massoud
; Date: 20 Janruary 2021
; Modified By: Perry Fulfs
; Description: Logging
;===========================================
*/ 

var header = require('../../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 3.2")); // updated content with actual name & assignment name

// start program // 

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        message: "Hey, you got to the logging example!"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});


