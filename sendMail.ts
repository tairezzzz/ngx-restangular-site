const nodemailer  = require('nodemailer');
require('dotenv').config();

export function sendMail(req, res){
  console.log(req.body);
  
  let email = req.body.email;
  let name = req.body.name;
  let text = req.body.message;
  
  let smtpConfig = {
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS
    }
  };
  let transporter = nodemailer.createTransport(smtpConfig);

  let mailOptions = {
    from: `"2mc 👥" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: 'Hello',
    text: `Sender ${name} - ${email}. ${text}`,
    html: `<b>Sender ${name} - ${email}.</b><br /> ${text}`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.json({
          status: error.statusCode
      });
    } else {
      res.send({
        status: 200,
        data: info
      });
    }
    
  });
}