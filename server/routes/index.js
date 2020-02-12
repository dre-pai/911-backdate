const express = require('express');
const router = express.Router();

router.get('/message', function(req, res, next) {
  res.json('Welcome To 911 Backdate');
});

module.exports = router;
