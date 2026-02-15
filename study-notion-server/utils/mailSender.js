const nodemailer = require("nodemailer")
const dns = require("dns")

// ⭐ VERY IMPORTANT for Render (fixes ETIMEDOUT)
dns.setDefaultResultOrder("ipv4first")

const mailSender = async (email, title, body) => {
  try {
    // create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // ⭐ more stable on Render than host/port config
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Gmail APP PASSWORD
      },

      // ⭐ Prevent timeout issues on Render
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
      tls: {
        rejectUnauthorized: false,
      },
    })

    // send mail
    const info = await transporter.sendMail({
      from: `"StudyNotion" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    })

    console.log("✅ Email sent:", info.response)
    return info
  } catch (error) {
    console.error("❌ Mail Sender Error:", error.message)
    throw error
  }
}

module.exports = mailSender
