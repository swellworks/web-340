/*
============================================
; Title: Assignment 1.5 / WEB340
; Author: Perry Fulfs
; Date: 09 Janruary 2021
; Modified By: Perry Fulfs
; Description: Hello World
;===========================================
*/ 

var header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Assignment 1.5")); // updated content with actual name & assignment name

// start program // 


// Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "This a quick note from myself - Hello!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

// end program //