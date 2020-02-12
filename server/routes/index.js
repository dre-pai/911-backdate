const express = require('express');
const router = express.Router();
const sesClient = require('../ses-client');

router.get('/message', function(req, res, next) {
  res.json('Welcome To 911 Backdate');
});

router.post('/send', (req, res) => {
  let backdateEmail = 'infobackdate@gmail.com';
  let name = req.body.name;
  let clientEmail = req.body.email;
  let message = req.body.comments;
  let subject = 'New 911 Backdate Reservation Request';
  let content = `Hello ${name}. Your email address is ${clientEmail}\n\n${message} `;

  sesClient.sendEmail(backdateEmail, subject, content, clientEmail);

  res.send('Email is sent!');
});

module.exports = router;
