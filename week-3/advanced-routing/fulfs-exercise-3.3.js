/*
============================================
; Title: Exercise 3.3 / WEB340
; Author: Zahra Massoud
; Date: 21 Janruary 2021
; Modified By: Perry Fulfs
; Description: Advanced Routing
;===========================================
*/ 

var header = require('../../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 3.3")); // updated content with actual name & assignment name

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.get("/:productId", function(req, res) { // get request reviece request in the url
    var productId = parseInt(req.params.productId, 10);

     res.render("index", { // output to ejs page
        productId: productId
    })

});

http.createServer(app).listen(3001, function() { // create a new server
console.log("Application started and listening on port %s", 8080);
});

