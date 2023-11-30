// Install express npm install express.

// Now let us request for express, and assign it to a constant called 'express'.

const express = require('express');

// Lets create our express server instance.
const app = express();

// Intialise a constant to store the PORT where our server will run.
const PORT = 3000;

// Create a default route
app.get('/', (req, res) => {
    res.send('This is the home page');
});

// Start out server
app.listen(PORT, () => {
    console.log('listening on port 3000');
})