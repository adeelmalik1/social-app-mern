const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
    var transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "143ce62ea6d20a",
          pass: "443e5ef49e6ec9"
        }
      });
//   const transporter = nodeMailer.createTransport({
//       host: process.env.SMPT_HOST,
//       port: process.env.SMPT_PORT,
//       auth: {
//           user: process.env.SMPT_MAIL,
//           pass: process.env.SMPT_PASSWORD,
//       },
//       service: process.env.SMPT_SERVICE,
//   })
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  console.log(mailOptions)
  await transporter.sendMail(mailOptions);
};