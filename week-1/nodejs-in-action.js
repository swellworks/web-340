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