const nodemailer  = require('nodemailer');
require('dotenv').config();

export function sendMail(req, res) {
  console.log(req.body);
  
  const email = req.body.email;
  const name = req.body.name;
  const text = req.body.message;

  const smtpConfig = {
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS
    }
  };
  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: `"2mc 👥" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: 'Hello',
    text: `Sender ${name} - ${email}. ${text}`,
    html: `<b>Sender ${name} - ${email}.</b><br /> ${text}`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.json({
        status: error.statusCode
      });
    } else {
      res.send({
        status: 200,
        data: info.response
      });
    }
    
  });
}