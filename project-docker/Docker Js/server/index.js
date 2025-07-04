// Load the http module to create an http server.
var http = require('http');

const myPort = process.env.PORT;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(`Hello World ${myPort}`);
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(myPort);

// Put a friendly message on the terminal
console.log(`Server running at http://127.0.0.1:${myPort}`);