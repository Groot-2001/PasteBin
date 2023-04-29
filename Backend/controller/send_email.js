const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    //create the transporter and its gonna use smtp protocol
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    //sending the email with sendMail() method
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject,
      text,
    });

    console.log("Email is send successfully");
  } catch (error) {
    console.error(error);
  }
};
