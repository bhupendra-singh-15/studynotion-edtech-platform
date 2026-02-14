const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      requireTLS: true,
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 20000,
    })

    let info = await transporter.sendMail({
      from: `"Studynotion" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    })

    console.log("Email sent:", info.response)
    return info
  } catch (error) {
    console.log("Mail Error:", error)
    return error.message
  }
}

module.exports = mailSender
