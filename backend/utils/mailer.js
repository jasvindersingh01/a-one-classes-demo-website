const nodemailer = require("nodemailer");

const sendNotificationEmail = async (name, phone, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000, // 10 sec
    });

    const mailOptions = {
      from: `"A-One Classes" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Enquiry - A-One Classes",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email Sent ✔");
  } catch (err) {
    console.error("Email Error:", err);
    throw err; // important for controller response
  }
};

module.exports = sendNotificationEmail;
