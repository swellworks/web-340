// header.ejs

<!doctype html>

<html lang="en">
    <head>

    <meta charset="utf-8">

    viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

     <title><%= title %></title>

   

     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
     integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
     crossorigin="anonymous">

    </head>

navbar.ejs

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <ul class="navbar-nav">

        <li class="nav-item active">

            nav-link" href="#">Home

        li>

        <li class="nav-item">

            nav-link" href="#">About

        li>

        <li class="nav-item">

            nav-link" href="#">Contact Us

        li>

    ul>

nav>

footer.ejs

<hr>

<footer>

    <p>© Company 2017</p>

</footer>

scripts.ejs

<!-- Scripts -->

app.js

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

</html>