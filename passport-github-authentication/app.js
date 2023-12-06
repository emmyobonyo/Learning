const express = require('express');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

const MONGO_URL =
  'mongodb+srv://komagumobonyo:G89uxVxOPI6Ag3u2@cluster0.p9gn28p.mongodb.net/learn';

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
  console.log('Connection to MongoDb done');
}

// Set View engine
app.set('view engine', 'ejs');

// AUthentication Routes
app.use('/auth', authRoutes);

// Home Route
app.use('/', (req, res) => {
  res.render('home');
});

async function startServer() {
  await mongoConnect();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
