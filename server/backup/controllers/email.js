const nodemailer = require('nodemailer');

export default nodemailer.createTestAccount((err, account) => {

      const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user: account.user,
            pass: account.pass,
          }
      });

      const mailOptions = {
        from: '',
        to: '',
        subject: '',
        text: '',
        html: '',
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if( error) { return console.log(error); }
      });

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

});
