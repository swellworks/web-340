var express = require("express"); //add express library name
var http = require("http"); //add http to start server

var app = express(); //add for the express app

var path = require("path");

app.set("ejs-views", path.resolve(__dirname, "ejs-views")); // Tell Express the views are in the 'ejs-views' directory

app.set("ejs-views engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(request, response) {

    response.render("index.ejs", {

        firstName: "Perry",
        lastName: "Fulfs\n",
        address: "Omaha, NE 68107"

   });

});

http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});
