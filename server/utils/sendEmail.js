const nodemailer = require("nodemailer");
const { EMAIL_NAME, EMAIL_PASSWORD } = require("./config");

const sendEmail = async (from, to, subject, newMsg) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      type: "login", // default
      user: EMAIL_NAME,
      pass: EMAIL_PASSWORD,
    },
  });

  const html = `<div>
            <h1>name: ${newMsg.name}</h1>
            <h3>email: ${newMsg.email}</h3>
            <p>msg: ${newMsg.message}<p/>      
      </div>`;

  let info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    html: html,
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
