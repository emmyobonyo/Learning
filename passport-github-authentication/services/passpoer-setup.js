const passport = require('passport');
const GithubStrategy = require('passport-github2');
const keys = require('./keys');

passport.use(
  new GithubStrategy(
    {
      callbackURL: 'auth/github/callback',
      clientID: keys.github.clientID,
    },
    () => {
      console.log('Here is a callback that is being run');
    }
  )
);
