let nodemailer = require('nodemailer');
let user = require('./user');

module.exports.sendEmail = function(payload) {
    const subscribedUser = payload['to'];
    console.log('Subscribed Emails to send @ ' + new Date(), subscribedUser);

    const randomeUser = 'oluwatoyinemmanuel008@gmail.com';
    const content = 'sdfbnkjhdlkndlkjglif';
    console.log('Random content to send', randomeUser, content);


    let mailOptions = {
        from: randomeUser,
        to: subscribedUser,
        subject: 'Email from Node-App: A Test Message!',
        text: content
    };

    let transporter = nodemailer.createTransport({
        service: payload['service'],
        auth: {
          user: payload['from'],
          pass: payload['password']
        }
    });
    

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}