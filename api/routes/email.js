// let router = require('express').Router()
// let helper = require('sendgrid').mail;
// let from_email = new helper.Email('test@example.com');
// let to_email = new helper.Email('test@example.com');
// let subject = 'Hello World from the SendGrid Node.js Library!';
// let content = new helper.Content('text/plain', 'Hello, Email!');
// let mail = new helper.Mail(from_email, subject, to_email, content);
// let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

// router.get('/test', (req, res) => {

//   sendgrid.send(email);
//   method: 'POST'
//   path: '/v3/mail/send'
//   body: mail.toJSON()
//   res.send('OK')
// })


const router = require('express').Router();

const nodemailer = require('nodemailer');

router.post('/send', (req, res) => {
  console.log(req.body.email)

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


// const SENDGRID_API_KEY = '0zcsIYwqZvoyRB2Oz9Q0';
// const SENDGRID_SENDER = 'noreply@etech.net';
// const Sendgrid = require('sendgrid')(SENDGRID_API_KEY);


// // router.get('/', (req, res) => {
// //   res.render('index');
// // });

// router.post('/hello', (req, res) => {
//   const sgReq = Sendgrid.emptyRequest({
//     method: 'POST',
//     path: '/v3/mail/send',
//     body: {
//       personalizations: [{
//         to: [{ email: req.body.email }],
//         subject: 'Hello World!'
//       }],
//       from: { email: SENDGRID_SENDER },
//       content: [{
//         type: 'text/plain',
//         value: 'Sendgrid on Google App Engine with Node.js.'
//       }]
//     }
//   });



//   Sendgrid.API(sgReq, (err) => {
//     if (err) {
//       console.log(err)
//     }

//     res.send('YO')
//     // res.render('index', {
//     //   sent: true
//     // });
//     return;
//   });
// })

// // if (module === require.main) {
// //   const PORT = process.env.PORT || 8080;
// //   router.listen(PORT, () => {
// //     console.log(`App listening on port ${PORT}`);
// //     console.log('Press Ctrl+C to quit.');
// //   });

// // }
module.exports = router
