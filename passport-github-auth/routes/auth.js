const router = require('express').Router();
const passport = require('passport');

router.get('/logout', (req, res) => {
  res.send('this is the logout route');
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

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  res.send('this is where its redirected to');
});

module.exports = router;
