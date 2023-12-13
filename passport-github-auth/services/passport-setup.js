const GithubStrategy = require('passport-github2');
const passport = require('passport');
const keys = require('./keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user.id);
  });
});

passport.use(
  new GithubStrategy(
    {
      callbackURL: '/auth/github/callback',
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ uniqueId: profile.id }).then((existingUser) => {
        if (existingUser) {
          console.log('User already exists in the database', existingUser);
          done(null, existingUser);
        } else {
          new User({
            uniqueId: profile.id,
            username: profile.username,
            name: profile.displayName,
          })
            .save()
            .then((currentUser) => {
              console.log(`Current User ${currentUser}`);
              done(null, currentUser);
            });
        }
      });
    }
  )
);
