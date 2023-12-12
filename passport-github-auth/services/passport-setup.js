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
    (accessToken, refreshToken, profile, done) => {
      //passport cllback function
      console.log('passport fired');
      console.log(profile);
    }
  )
);