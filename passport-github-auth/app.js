const express = require('express');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
const passportSetup = require('./services/passport-setup');
const keys = require('./services/keys');
const cookieSession = require('cookie-session');
const profileRoutes = require('./routes/profile');
const passport = require('passport');

const PORT = 3000;

const MONGO_URL =
  'mongodb+srv://komagumobonyo:G89uxVxOPI6Ag3u2@cluster0.p9gn28p.mongodb.net/learn';

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
  console.log('Connection to MongoDb done');
}

const app = express();

app.set('view engine', 'ejs');

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Initialize Auth Routes
app.use('/auth', authRoutes);

// Profile Routes
app.use('/profile', profileRoutes);

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
