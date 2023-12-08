const passport = require('passport');
const GithubStrategy = require('passport-github2');
const keys = require('./keys');
const Developer = require('../models/developer');

passport.use(
  new GithubStrategy(
    {
      callbackURL: '/auth/github/callback',
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      Developer.findOne({ id: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log('User already exists');
        } else {
          new Developer({
            id: profile.id,
            username: profile.username,
            name: profile.name,
          })
            .save()
            .then((newUser) => {
              console.log('A User has been added to the database');
              // done(null, newUser);
            });
        }
      });
      // console.log(profile);
    }
  )
);
