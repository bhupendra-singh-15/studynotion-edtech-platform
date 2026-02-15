const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    // create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // smtp.gmail.com
      port: 587, // use 587 for Gmail
      secure: false, // false for 587
      auth: {
        user: process.env.MAIL_USER, // your gmail
        pass: process.env.MAIL_PASS, // ⭐ APP PASSWORD (not gmail password)
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
    console.error("❌ Mail Sender Error:", error)
    throw error
  }
}

module.exports = mailSender
