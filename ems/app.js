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

app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page"
    });
});

app.get("/list", function (req, res) {
    res.render("list");
});

app.get("/new", function (req, res) {
    res.render("new", {
        title: "New Page"
    });
});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});