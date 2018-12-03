require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const app = express()

app.use('/scripts', express.static(__dirname + '/node_modules/'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
});

//https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-2-5fbdea95f8a1
app.listen(3000, () => console.log('Server running on port 3000'));

//https://codeburst.io/sending-an-email-using-nodemailer-gmail-7cfa0712a799

function sendMail( mailOptions, res ){
    return res.json({sucess: false, status: 500});
    transporter.sendMail( mailOptions, function(err, info) {
        if (err) {
            res.json({sucess: false, status: 500});
        }else{
            res.json({success: true, status : 200});
        }
    });
}

app.post('/contact', function (req, res) {
    const mailOptions = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: GMAIL_USER,
        subject: 'New message from contact form at deem-ai.com',
        text: `${req.body.name} ${req.body.lastName} (${req.body.email}, ${req.body.phone}) says: ${req.body.message}`
    };
    sendMail(mailOptions, res);
});

app.post('/register', function (req, res) {
    const mailOptions = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: GMAIL_USER,
        subject: 'New register from register form at deem-ai.com',
        text: `${req.body.name} ${req.body.lastName} (${req.body.email}, ${req.body.phone})`
    };
    sendMail(mailOptions, res);
});
