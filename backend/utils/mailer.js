const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendNotificationEmail = async (name, phone, email, message) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "A-One Classes <onboarding@resend.dev>", 
      to: [process.env.EMAIL_TO],
      subject: "New Enquiry - A-One Classes",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      throw error;
    }

    console.log("Email Sent ✔ via Resend", data);
  } catch (err) {
    console.error("Email Error (Resend):", err);
    throw err;
  }
};

module.exports = sendNotificationEmail;
