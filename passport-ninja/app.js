const express = require('express');
const authRoutes = require('./routes/auth');
const passportSetup = require('./services/passport-setup');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./services/keys');
const passport = require('passport');

const MONGO_URL =
  'mongodb+srv://komagumobonyo:G89uxVxOPI6Ag3u2@cluster0.p9gn28p.mongodb.net/learn';

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
  console.log('Mongoose connection ready');
}

const app = express();

// Set up view engine
app.set('view engine', 'ejs');

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

// Initiaize passport
app.use(passport.initialize);
app.use(passport.session());

// Set up routes
app.use('/auth', authRoutes);

// Create home route
app.get('/', (req, res) => {
  res.render('home');
});

async function startServer() {
  await mongoConnect();
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
}

startServer();
