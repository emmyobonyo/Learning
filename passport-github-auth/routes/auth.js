const router = require('express').Router();
const passport = require('passport');

router.get('/logout', (req, res) => {
  res.send('This is the Log out route');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['profile'],
  })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('/profile');
  }
);

module.exports = router;
