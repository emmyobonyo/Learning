const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(
    'You are logged in. This is your profile username: ' + req.user.username
  );
});

module.exports = router;
