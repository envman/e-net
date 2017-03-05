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
const path = require('path');
const bodyParser = require('body-parser');


const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_SENDER = process.env.SENDGRID_SENDER;
const Sendgrid = require('sendgrid')(SENDGRID_API_KEY);

router.set('views', path.join(__dirname, 'views'));
router.set('view engine', 'pug');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/hello', (req, res, next) => {
  const sgReq = Sendgrid.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [{
        to: [{ email: req.body.email }],
        subject: 'Hello World!'
      }],
      from: { email: SENDGRID_SENDER },
      content: [{
        type: 'text/plain',
        value: 'Sendgrid on Google App Engine with Node.js.'
      }]
    }
  });

  Sendgrid.API(sgReq, (err) => {
    if (err) {
      next(err);
      return;
    }

    res.render('index', {
      sent: true
    });
    return;
  });
});

if (module === require.main) {
  const PORT = process.env.PORT || 8080;
  router.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });

}
module.exports = router
