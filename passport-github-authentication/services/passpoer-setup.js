const passport = require('passport');
const GithubStrategy = require('passport-github2');
const keys = require('./keys');

passport.use(
  new GithubStrategy(
    {
      callbackURL: '/auth/github/callback',
      clientID: keys.github.clientID,
      clientSecret: keys.github.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);
