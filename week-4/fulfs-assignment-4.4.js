/*
============================================
; Title: Assignment 4.4 / WEB340
; Author: Zahra Massoud
; Date: 09 Janruary 2021
; Modified By: Perry Fulfs
; Description: Hello World
;===========================================
*/ 

var header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Assignment 4.4")); // updated content with actual name & assignment name

// start program

var express = require ('express');
const { request } = require('http');

var app = express();

app.get('/', function(req, res){
    res.send("you just sent a GET request, friend");
});

app.post('/', function(req, res){
    res.send("a POST request, nice");
});

app.put('/', function(req, res){
    res.send("i don't see a lot of PUT requests anymore");   
});

app.delete('/', function(req, res){
    res.send("oh my, a DELETE?");
});

app.listen(3000, function(){
    console.log("App is listening on port 3000");
});

// end program

