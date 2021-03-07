// require statements
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var csrf = require("csurf");


// setup csrf protection
var csrfProtection = csrf({cookie: true});

// initialize express
var app = express();


// use statements
app.use(logger("short"));

app.use(bodyParser.urlencoded({

    extended: true

}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {

    var token = request.csrfToken();

    response.cookie('XSRF-TOKEN', token);

    response.locals.csrfToken = token;

    next();

});

// not sure if supposed to keep this one?
// app.use(helmet.xssFilter());


// set statements
app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");


// START EJS PAGES
// ----------------------------------------------

// index page
app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page",
        message: "New Employee Entry Page"
    });
});

// list page
app.get("/list", function(req, res) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;
       res.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});


// app.get('/list', function(req, res) {
//     res.render('list.ejs', {
//         title: "List Page",
//         message: "List Page"
//     });
// });

// new page
app.get('/new', function(req, res) {
    res.render('new.ejs', {
        title: "New Page",
        message: "New Page"
    });
});

// view page
app.get('/view', function(req, res) {
    res.render('view.ejs', {
        title: "View Page",
        message: "View Page"
    });
});

// post
app.post("/process", function(req, res) {
    // console.log(request.body.txtName);
    if (!req.body.txtName) {
        res.status(400).send("Entries must have a name");
        return;
    }

    // get the request's form data
    var employeeName = request.body.txtName;
    console.log(employeeName);
 
    // create a fruit model
    var employee = new Employee({
        name: employeeName
    });
 
    // save
    fruit.save(function (error) {
        if (error) throw error;
        console.log(employeeName + " saved successfully!");
    });
    response.redirect("/");
 });

// create/start Node server
http.createServer(app).listen(3005, function() {
    console.log("Application started on port 3005!");
});