// Install express npm install express

const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/messages', (req, res) => {
    res.send('This is a message')
});

app.listen(PORT, () => {
    console.log('listening on port 3000');
})