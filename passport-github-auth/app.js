const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();

app.set('view engine', 'ejs');

// Creare home route

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
