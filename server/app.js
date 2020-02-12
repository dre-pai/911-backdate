const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');

const app = express();
const nodemailer = require('nodemailer');
const emailCredentials = require('./config.json');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.post('/send', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.comments;
  let content = `Hello ${name}. Your email address is ${email}\n\n${message} `;

  let transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: emailCredentials.email,
      pass: emailCredentials.pass
    }
  };

  let transporter = nodemailer.createTransport(transport);

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
  });
});
app.use('/images', express.static(path.join(__dirname, '/../public/images')));
app.use('/api', index);
app.get('*', (req, res) => {
  res.sendFile('build/index.html', { root: global });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
