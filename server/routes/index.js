const express = require('express');
const router = express.Router();
const sesClient = require('../ses-client');

router.get('/api/message', function(req, res, next) {
  res.json('Welcome To 911 Backdate');
});

router.post('/api/send', (req, res) => {
  let backdateEmail = 'infobackdate@gmail.com';
  let name = req.body.name;
  let clientEmail = req.body.email;
  let clientPhone = req.body.phone;
  let message = req.body.comments;
  let subject = 'New 911 Backdate Reservation Request';
  let content = `A new 911 Backdate reservation form has been submitted.<br />
                <br />
                Name: ${name}<br />
                Email: ${clientEmail}<br />
                Phone: ${clientPhone}<br />
                Message: ${message} `;

  sesClient.sendEmail(backdateEmail, subject, content, clientEmail);

  res.send('Email is sent!');
});

router.get('*', (req, res) => {
  res.sendFile('build/index.html', { root: global });
});

module.exports = router;
