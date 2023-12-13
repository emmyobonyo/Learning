const GithubStrategy = require('passport-github2');
const passport = require('passport');
const keys = require('./keys');
const User = require('../models/user');

passport.use(
  new GithubStrategy(
    {
      callbackURL: '/auth/github/callback',
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ id: profile.id }).then((existingUser) => {
        if (existingUser) {
          console.log('User already exists in the database', existingUser);
        } else {
          new User({
            id: profile.id,
            username: profile.username,
            name: profile.displayName,
          })
            .save()
            .then((currentUser) => {
              console.log(`Current User ${currentUser}`);
            });
        }
      });
    }
  )
);
