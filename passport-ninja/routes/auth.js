const router = require('express').Router();
const passport = require('passport');

//Auth Login

router.get('/login', (req, res) => {
  res.render('login');
});

// Auth Logout

router.get('/logout', (req, res) => {
  // Handle with passport
  res.send('logging out');
});

// Auth with Google

// router.get('/google', (req, res) => {
// Handle with passport
// res.send('Logging in with Google +');
// });

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// Callback Google route
// router.get('/google/callback', passport.authenticate('google'), (req, res) => {
//   res.send('You reached the callback URI');
// });
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // res.send(req.user);
    // res.send('you reached the redirect URI');
    res.redirect('/profile');
  }
);
module.exports = router;
