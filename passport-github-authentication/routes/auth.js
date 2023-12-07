// Logout route
const router = require('express').Router();
const passport = require('passport');

router.get('/logout', (req, res) => {
  res.send('This is the Log out route');
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

//Github passport route
// router.get('/github', passport.authenticate('github'), {
//   scope: ['profile'],
// });
router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['profile'],
  })
);

// Github Authentication callbacks route
router.get('/github/callback', (req, res) => {
  res.send('This is the callback route for github authentication');
});

module.exports = router;
