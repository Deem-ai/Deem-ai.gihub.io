require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use('/scripts', express.static(__dirname + '/node_modules/'))
app.use(express.static('public'))


// POST route from contact form
app.post('/contact', function (req, res) {
  GMAIL_USER = process.env.GMAIL_USER;
  GMAIL_PASS = process.env.GMAIL_PASS;
  console.log(GMAIL_USER);
  console.log(GMAIL_PASS);
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: 'New message from contact form at deem-ai.com.co',
    text: `${req.body.name} ${req.body.lastName} (${req.body.email}, ${req.body.phone}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    if (error) {
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  });
});

app.listen(3000, () => console.log('Server running on port 3000'))
