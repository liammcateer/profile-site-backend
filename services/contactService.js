var nodemailer = require('nodemailer');
const SMTPConnection = require('nodemailer/lib/smtp-connection');

var transport = {
    host: process.env.SMTP_SERVER, // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

exports.sendEmail = async function (data){
  var name = data.name
  var email = data.email
  var message = data.message
  var content = `name: ${name} \nemail: ${email} \nmessage: ${message} `

  var mail = {
    from: process.env.EMAIL_USERNAME,
    replyTo: email,
    to: process.env.EMAIL_USERNAME,
    subject: 'New Message from Contact Form',
    text: content
  }

  return await transporter.sendMail(mail)
}
