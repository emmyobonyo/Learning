const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', ((req, res) => {
    res.send('This is the home pages')
}));
app.listen(PORT, ()=>{
    console.log(`Listening in on ${PORT}`)
})