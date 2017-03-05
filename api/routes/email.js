
const router = require('express').Router();

const nodemailer = require('nodemailer');

router.post('/send', (req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'enetmailer@gmail.com',
          pass: 'Password123.'
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"enet mailer" <enetmailer@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.text, // plain text body
      html: req.body.html // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }

      res.send('SENT')
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
})

.get('/test/:mail', (req, res) => {
  console.log(req.params.mail)

  res.send('OK')
})

module.exports = router
