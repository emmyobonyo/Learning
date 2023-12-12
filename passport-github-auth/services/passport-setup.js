const GithubStrategy = require('passport-github2');
const passport = require('passport');
const keys = require('./keys');

passport.use(
  new GithubStrategy(
    {
      callbackURL: '/auth/github/callback',
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret,
    },
    () => {
      //passport cllback function
    }
  )
);
