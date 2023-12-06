// Logout route
const router = require('express').Router();

router.get('/logout', (req, res) => {
  res.send('This is the Log out route');
});

// Login route
router.get('/login', (req, res) => {
  res.send('This is the login route');
});

//Github passport route
router.get('/github', (req, res) => {
  res.send('This is the github passport route. We shall work on it later');
});

// Github Authentication callbacks route
router.get('/github/callback', (req, res) => {
  res.send('This is the callback route for github authentication');
});

module.exports = router;
