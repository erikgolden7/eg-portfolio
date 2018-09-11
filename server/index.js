const express = require('express');
const cors = require('cors');
const nodeMailer = require('nodemailer');
const path = require('path');
const { urlencoded, json } = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 3001;

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.post('/send-email', function(req, res) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  let mailOptions = {
    from: `${req.body.name} ${req.body.surname} <${req.body.email}>`,
    to: `Erik Golden <${process.env.GMAIL_USER}>`,
    subject: req.body.subject,
    text: req.body.message,
    html: req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.render('contact-failure');
    } else {
      res.redirect(process.env.HOME_REDIRECT || 'http://localhost:3001/');
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function() {
  console.log(`listening to port: ${port}`);
});
