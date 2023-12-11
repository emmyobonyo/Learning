const router = require('express').router();

router.get('/logout', (req, res) => {
  res.send('this is the logout route');
});

router.get('/login', (req, res) => {
  res.render('/login');
});

router.get('/github', (req, res) => {
  res.send('This is our github route');
});
