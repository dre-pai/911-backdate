const express = require('express');
const router = express.Router();
const sesClient = require('../ses-client');
/*const nodemailer = require('nodemailer');
const emailCredentials = require('../config.json');
let transport = {
  host: 'smtp.gmail.com',
  port: 25,
  secure: true,
  auth: {
    user: emailCredentials.email,
    pass: emailCredentials.pass
  }
};
let transporter = nodemailer.createTransport(transport);*/

router.get('/message', function(req, res, next) {
  res.json('Welcome To 911 Backdate');
});

router.post('/send', (req, res) => {
  sesClient.sendEmail(
    'apa11393@gmail.com',
    'Hey! Welcome',
    'This is the body of email'
  );

  res.send('Email is sent!');

  /*let name = req.body.name;
  let email = req.body.email;
  let message = req.body.comments;
  let content = `Hello ${name}. Your email address is ${email}\n\n${message} `;

  let mail = {
    from: `"911 Backdate Reservation Form" ${email}`,
    to: email,
    subject: 'New 911 Backdate Reservation Request',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      });
    } else {
      res.json({
        msg: 'success'
      });
    }
  });*/
});

module.exports = router;
