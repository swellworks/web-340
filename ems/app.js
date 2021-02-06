header.ejs

<!doctype html>

<head>
  <meta charset="utf-8">

  <title><%= title %><</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
  crossorigin="anonymous">

</head>

navbar.ejs

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <ul class="navbar-nav">

        <li class="nav-item active">
            <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">About</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Contact Us</a>
        </li>

    </ul>

</nav>

footer.ejs

<hr>

<footer>

    <p>© Company 2017</p>

</footer>

scripts.ejs

<!-- scripts -->

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

