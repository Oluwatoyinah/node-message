
let cron = require('node-cron');
let nodemailer = require('nodemailer');
const mg = require("nodemailer-mailgun-transport")

const mailgunAuth = {
  auth: {
    api_key: "key-12341234123412341234",
    domain: "One of your domain names listed at your https://mailgun.com/app/domains"
  }
}


// e-mail message options
let mailOptions = {
      from: 'akinbobolaoluwatoyin25@gmail.com',
      to: 'oluwatoyinemmanuel008@gmail.com',
      subject: 'Secret meaasge from Oluwatoyin',
      text: 'Send email every minute'
 };

// e-mail transport configuration
let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'akinbobolaoluwatoyin25@gmail.com',
        pass: 'something'
      }
  });

cron.schedule('* * * * * *', () => {
// Send e-mail
transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
});
