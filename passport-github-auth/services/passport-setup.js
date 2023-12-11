const passport = require('passport');
const GithubStrategy = require('passport-github2');
const keys = require('./keys');
const Developer = require('../models/developer');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Developer.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GithubStrategy(
    {
      callbackURL: '/auth/github/callback',
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret,
    },
    // We'll first add some parameters that we'll recieve from Github
    (accessToken, refreshToken, profile, done) => {
      Developer.findOne({ id: profile.id }).then((currentUser) => {
        if (currentUser) {
          // Already have a User
          console.log('User already exists');
          done(null, currentUser);
        } else {
          new Developer({
            id: profile.id,
            username: profile.username,
            name: profile.displayName,
          })
            .save()
            .then((newUser) => {
              console.log('A User has been added to the database');
              console.log(newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
