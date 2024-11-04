// app.js
const express = require('express');  // Import express
const app = express();               // Create an instance of express
const port = process.env.PORT || 8000;                   // Define a port to listen on

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');         // Send a response to the client
});

// Define another route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
