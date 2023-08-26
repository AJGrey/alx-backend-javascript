const http = require('http');

const hostname = '127.0.01';
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
app.listen(1245);

// Export the app for external use
module.exports = app;

