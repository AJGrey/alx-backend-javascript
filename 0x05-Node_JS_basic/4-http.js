const http = require('http');

const hostname = 'localhost';
const port = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response status
  res.statusCode = 200;

  // Set the response header
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
app.listen(port, hostname);

// Export the app for external use
module.exports = app;

