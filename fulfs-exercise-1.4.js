/*
============================================
; Title: Exercise 1.4 / WEB340
; Author: Perry 
; Date: 09 Janruary 2021
; Modified By: Perry 
; Description: Modules
;===========================================
*/ 

var header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 1.3")); // updated content with actual name & assignment name

// start program // 

var url = require("url");

var parsedURL = url.parse("https://github.com/swellworks/web-340?name=fulfs");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);


// end program //