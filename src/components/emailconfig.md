
echo "export SENDGRID_API_KEY='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'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env

npm install --save @sendgrid/mail

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })