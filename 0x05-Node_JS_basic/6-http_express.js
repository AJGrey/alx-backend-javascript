const express = require('express');

// Create an Express app
const app = express();
const PORT = 1245;

// Define a route for the endpoint "/"
app.get('/', (_, res) => {
  res.send('Hello Holberton School!\n');
});

// Listen on port 1245
app.listen(PORT, () => {
  console.log('Server is listening on PORT ${PORT}');
});

// Export the app for external use
module.exports = app;

