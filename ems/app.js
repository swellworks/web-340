header.ejs
<head>

    charset="UTF-8">

    viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

     <title><%= title %></title>

   

    stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"

          integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

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