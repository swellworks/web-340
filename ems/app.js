// <%- include('header') -%>

// <%- include('navbar') -%>

// <%- include('footer') -%>

// <%- include('scripts') -%>


// <!-- Scripts -->

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

// index page
app.get("/", function(req, res) {
    res.render("index", {
        title: "Home page"
    });
});

// list page
app.get("/", function(req, res) {
    res.render('/list');
});

// new page
app.get('/new', function(req, res) {
    res.render('/new');
});

http.createServer(app).listen(8000, function() {

    console.log("Application started on port 8000!");

});