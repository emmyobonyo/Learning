const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

// An alternate longer way of doing things

// function assignUser(profile) {
//   const user = new User({
//     username: profile.displayName,
//     googleid: profile.id,
//   });

//   return user;
// }

// async function saveUser(profile) {
//   await User.findOneAndUpdate(
//     {
//       googleid: profile.id,
//     },
//     assignUser(profile),
//     {
//       upsert: true,
//     }
//   );
//   console.log('User has been saved');
// }

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      /* console.log('pasport callback function fired');
      console.log(profile); */

      // Check if User already exists in the database.
      User.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          // Already have a User
          console.log('Current User is', currentUser);
          done(null, currentUser);
        } else {
          new User({
            googleid: profile.googleid,
            username: profile.displayName,
          })
            .save()
            .then((newUser) => {
              console.log('New User', newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
