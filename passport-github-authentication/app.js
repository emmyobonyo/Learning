const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();

const PORT = 3000;

// Set View engine
app.set('view engine', 'ejs');

// AUthentication Routes
app.use('/auth', authRoutes);

// Home Route
app.use('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
